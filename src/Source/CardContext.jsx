/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
export default function CardContext(props) {
  let {id,name,like,src,flagImages} = props.object;
  return (
    <div className='cardContent'>
      <div className="cardImage">
        <img src={src} alt={id} />
      </div>
      <div className='cardTitle'>
        <h2>{name}</h2>
        <p>like ({like})</p>
      </div>
      <div className='cardButton'>
        <button onClick={()=>{props.setImage(flagImages,id)}} className='buttonImage'>images</button>
        <button onClick={()=>{props.setLike(id)}} className='buttonLike'>like</button>
      </div>
    </div>
  );
};
