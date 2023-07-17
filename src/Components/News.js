import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    
    static defaultProps = {
      country: 'in',
      pageSize: 6,
      category: 'general'
    }
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
  constructor(){
    super();
    this.state={
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount()
  { this.updateNews();
    
  }
  async updateNews (){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe1d29d54aca457bbbdc60124be4c84c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({articles: parseData.articles, 
      totalResults: parseData.totalResults,
    loading: false})
  }
  

  
  fetchMoreData = async () => {
    this.setState({page: this.state.page +1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe1d29d54aca457bbbdc60124be4c84c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parseData = await data.json();
    
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
     
    })
  };

  render() {
    return (
      <>
        
        <h1 className='text-center'>NewsMonger - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.key}>
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
  }
}
   
export default News  