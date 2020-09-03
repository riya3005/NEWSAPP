import React, { Component } from 'react';
import './../cssfiles/NewsPost.css'



class NewsPost extends Component {
    render() {
        return (
            <div key={this.props.index} className="NewsPost">
                <div className="Header">
                    <img className="imageTag" src ={this.props.temp.urlToImage} width={80} height={80} mode='fit' alt='' />
                 
                {/*<div> {this.props.temp.publishedAt}</div> */}
                </div>
                <div className="brief">
                    <div className="text">{this.props.temp.title}</div>
                    <a href={this.props.temp.url} className="URL">Read More...</a>
                </div>
                </div>
        )
    }
}

export default NewsPost
