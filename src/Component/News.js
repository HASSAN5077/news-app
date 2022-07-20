import React, { Component } from "react";
import Loading from "./Loading";
import Newsitem from "./Newsitem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=25495e5b7ca74a6f8cccdbdb710cf54c&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    this.setState({loading:true})
    let parsedData = await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
    this.props.setProgress(100);
  }
  handleNxtClick = async () => {
    console.log("click");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 3)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=25495e5b7ca74a6f8cccdbdb710cf54c&page=${this.state.page + 1
        }&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
  };
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=25495e5b7ca74a6f8cccdbdb710cf54c&page=${this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1,loading:false });
  };
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center" }}>News App - Top Headlines</h2>
        {this.state.loading && <Loading/>}
        <div className="box">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="newsBx" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 60) : ""}
                  description={
                    element.description ? element.description.slice(0, 180) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url} author = {element.author} date = {element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button className="next" onClick={this.handleNxtClick}>
            Next &rarr;
          </button>
          <button
            disabled={this.state.page <= 1} className="prev" onClick={this.handlePrevClick}>
            &larr; Previous
          </button>
        </div>
      </div>
    );
  }
}

export default News;
