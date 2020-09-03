import React from 'react'
import './../cssfiles/NewsDisplay.css'

const NewsDisplay = (props) => {
    console.log(props.news)
    return (
        <div key={props.index} className="NewsDisplay">
            <div className="Header">
                <img className="imageTagDisplay" src={props.news.urlToImage} width={400} height={450} mode='fit' alt='' />
            </div>
            <div className="textdisplay">
                <div className="title">{props.news.title}</div>
                <div className="content"> {props.news.content}</div>
                <div className="atTheEnd">
                    <div> Published at: {props.news.publishedAt}</div>
                    <b><a href={props.news.url} className="URL">Read More...</a></b>
                </div>

            </div>
        </div>
    )
}

export default NewsDisplay