import React, { Component } from 'react'
import NewsPost from './NewsPost'
import axios from 'axios'
import './../cssfiles/DisplayPage.css'
import {connect} from 'react-redux'
import NewsDisplay from './NewsDisplay'


const NEWS_API_KEY = "3068c35fb6f543c7a3cfc285a735f5fa";

var date = new Date();
date.setDate(date.getDate() - 1);
date.setMonth(date.getMonth() - 1);
class DisplayPage extends Component {
    state = {
        news: {
            author: '',
            content: '',
            url: '',
            publishedAt: '',
            title: '',
            urlToImage: ''
        }
    }


    getNews = () => {
        console.log(this.props.newsCategory)
        let url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NEWS_API_KEY}`
        if(this.props.newsCategory === 'tech'){
            url = `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${NEWS_API_KEY}`
        }
        else if(this.props.newsCategory === 'bitcoin'){
            url =`http://newsapi.org/v2/everything?q=bitcoin&from=${date}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
        }
        else if(this.props.newsCategory === 'wallStreet'){
            url = `http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${NEWS_API_KEY}`
        }
        axios.get(url)
            .then(res => {
                const newspost = res.data;
                const resKeys = Object.keys(newspost);
                const articles = newspost[resKeys[2]];
                //let updatedNews;
                const articlepsot = articles.map(article => {
                    const author = article["author"]
                    const content = article["content"]
                    const url = article["url"]
                    const publishedAt = article["publishedAt"]
                    const title = article["title"]
                    const urlToImage = article["urlToImage"]

                    return {
                        author,
                        content,
                        url,
                        publishedAt,
                        title,
                        urlToImage
                    }
                });

                //console.log(articlepsot)
                
                    this.setState({
                        news: articlepsot
                    })
                
                
            })
            .catch(err => {
                console.log(err);
            })

    }

    componentDidMount() {
        this.getNews();
    }

    componentDidUpdate(prevProps) {
        if(this.props.newsCategory !== prevProps.newsCategory){
            this.getNews();
        }
            
    }
    render() {
        let newsPost = "No News";
        let newsDisplay = "Loading...";
        if (this.state.news.length > 0) {
            newsDisplay = <NewsDisplay news={this.state.news[0]}/>
            const newsList = this.state.news.slice(1);
            newsPost = newsList.map((temp, index) => <NewsPost key={index} index={index} temp={temp} />)
            
        }
        return (
            <div className="display">
                <div className="horizontalScrolling">
                    {newsPost}
                </div>
                <div className="newsDisplay">
                    <div className="displayCards"> {newsDisplay}  </div>
                    <div className="relatedArticles"> Top Stories </div>
                </div>
                <div className="additionalNews">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newsCategory: state.newsCategory,
    };
}


export default connect(mapStateToProps, null)(DisplayPage)

