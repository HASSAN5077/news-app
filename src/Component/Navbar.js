import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    render() {

        return (
            <div className="nav">
            <Link href="#" className="logo"><span>N</span>ews<span>A</span>pp</Link>
                <nav className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                <div className="category">
                    <ul>
                        <li><Link to="/health">health</Link></li>
                        <li><Link to="/business">business</Link></li>
                        <li><Link to="/sports">sports</Link></li>
                        <li><Link to="/technology">tech</Link></li>
                        <li><Link to="/entertainment">entertainment</Link></li>
                    </ul> 
                </div>                
            </div>
            // business entertainmentgeneralhealthsciencesportstechnology
        )
    }
}
