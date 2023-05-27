import React from 'react'
import { connect } from 'react-redux';
import { convertImage, setLike } from '../Redux/Actions/mainActions';

function CardRedux(props) {
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
        <button onClick={()=>{props.convertImage(flagImages,id)}} className='buttonImage'>images</button>
        <button onClick={()=>{props.setLike(id)}} className='buttonLike'>like</button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    dataObject : state
  };
};
const mapDispatchToProps  = (dispatch) => {
  return {
    setLike : (id) => {
      dispatch(setLike(id));  
    },
    convertImage : (flagImages,id) => {
      dispatch(convertImage(flagImages,id))
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(CardRedux);