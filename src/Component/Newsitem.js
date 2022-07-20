import React, { Component } from 'react';

export class Newsitem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl,author,date } = this.props;
        return (
            <div className="newsitem">
                <div className="img">
                    <img src={imgUrl} alt="" />
                    <div className="content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={newsUrl} target="_blank">Read More</a>
                        <p className="time-publish">By {author} on {new Date(date).toGMTString()}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem;
