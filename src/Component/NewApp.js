import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

export default function NewApp({category}) {
    const [articles,setArticles]=useState([]);

    useEffect(()=>{
     let url= `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0b59db3e472f4d19959c432b0eb2dbdb`;
     fetch(url).then(response=>response.json())
     .then(data=>setArticles(data.articles))
    
    },[category])
  return (
    <div>
      <h2 className='text-center'><span className='badge bg-danger'>latest-news</span></h2>
    <br/>
    {
        articles.map((news,index)=>
        {
        return <Newsitem key={index} title={news.title} description={news.description}
          src={news.urlToImage}  url={news.url}
        />
        }
        )
        }
     
    </div>
  )
}
