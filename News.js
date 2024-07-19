import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = []
    constructor() {
        super();
        this.state = {
           articles: [],
           loading: false,
           page :1 
        }
    }

     async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9b268632ed204391bf2fd7e09be48641&pageSize=20";
      let data = await fetch(url);
      let passedData = await data.json();
      this.setState({articles: passedData.articles})
    }

      handlePrevClick = async () =>{
      console.log("Previous");
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9b268632ed204391bf2fd7e09be48641&page=${this.state.page - 1}&pageSize=20`;
       let data = await fetch(url);
       let passedData = await data.json();
       this.setState({
       page: this.state.page - 1,
       articles: passedData.articles
       })
       }
     

      handleNextClick = async () =>{
       console.log("Next");
       if(this.state.page + 1 > Math.ceil(this.state.totalResult/20)){

       }
       else{
         let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9b268632ed204391bf2fd7e09be48641&page=${this.state.page + 1}&pageSize=20`;
         let data = await fetch(url);
         let passedData = await data.json();
         this.setState({
         page: this.state.page + 1,
         articles: passedData.articles
        })
       }
     }
     
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center"> NewsMonkey - Top Headlines </h1>
        <div className="row">
        {this.state.articles.map((element) => {
           return <div className="col-md-4" key = {element.url}>
             <NewsItem title={element.title?element.title:""} description = {element.description?element.description:""} imageUrl = {element.urlToImage} newsUrl={element.url}/>
             </div>
        })}
       </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}> &larr; Previous </button>
       <button disabled= {this.state.page + 1 > Math.ceil(this.state.totalResult/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
       </div>
      </div>
    )
  }
}

export default News
