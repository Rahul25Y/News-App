import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import images from './asset/istockphoto-1194895574-612x612.jpg';
// {title, description, src, url}
export default function Newsitem({title, description, src, url}) {
  return (
    <div className='Container'>
      <div className='row' >
        <div className="col-4 col-md-4" style={{width:"90%"}}>
          <div className='card bg-dark text-light mb-3 d-inline-block my-2 mx-5 px-4 py-2 ' 
          style={{width:"88%"}}>
            <img src={src?src:images} style={{height:"260px", width:"100%"}} className='card-img-top' alt='no-img'/>
            <div className='card-body'>
              <h5 className='card-title'>{title.slice(0,50)}</h5>
              <p className='card-text'>
                {description ? description.slice(0,90):"There are three different ways to create a new application: from scratch, from a template or duplicating an existing application."}
              </p>
              <a href={url} className='btn btn-primary'>Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
