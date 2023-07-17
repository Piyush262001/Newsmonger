//import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
      <div>
        <div className="card" >
      <img src={imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className='text-muted'>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} className="btn btn-primary" target='_blank' rel="noopener noreferrer">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem