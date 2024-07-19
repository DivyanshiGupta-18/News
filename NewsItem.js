import React, { Component } from 'react'

export class NewsItem extends Component {
    

  render() {
      let  {title, description, imageUrl, newsUrl,} = this.props;
    return (
      <div className="my-3">
       <div className="card" style={{width: "18rem"}}>
  <img src= {!imageUrl? "https://techcrunch.com/wp-content/uploads/2024/06/wwdc24-apple-intelligence-02.jpg?resize=1200,675": imageUrl} height="200px" width="200px"className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} ...</h5>
    <p className="card-text">{description} ...</p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem