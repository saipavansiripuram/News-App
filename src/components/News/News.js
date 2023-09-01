import React, { Component } from 'react';
import NewsItem from '../NewsItems/NewsItem';
import Spinner from '../spinner/Spinner';
import PropTypes from 'prop-types'

class News extends Component {
    static dafaultProps = {
        country :'uk',
        pageSize :6,
        category : '',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor(props){
        super(props);
        this.state = {
            articles :[],
            loading: false ,
            page:1
    }
    // this.handleNext = this.handleNext.bind(this);
    // this.handlePrev = this.handlePrev.bind(this);
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f65064aa6fde4e9e86490eff01f1a72e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json(data);
    console.log(parsedData);
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    });
    }
    handlePrev=async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f65064aa6fde4e9e86490eff01f1a72e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json(data);
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
            
        });
    }
    handleNext=async ()=>{
       if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f65064aa6fde4e9e86490eff01f1a72e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
       this.setState({loading: true});
        let data = await fetch(url);
       let parsedData = await data.json(data);
       console.log(parsedData);
       this.setState({
           page: this.state.page + 1,
           articles: parsedData.articles,
           loading: false
       });

       }

   }
   
    render() {
        return (
            
            <div className="container my-3">
                <h1 className="text-center" style={{margin:"40px 0px"}}>
                      INFINEWS
                </h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {
                        !this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}       
                </div>        
                <div className= "container d-flex justify-content-between ">
                <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrev}>&laquo;</button>
                <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNext}>&raquo;</button>
                </div>
            </div>
        );
    }
}

export default News;