import React from 'react';
import { connect } from 'react-redux';
import CardRedux from './CardRedux';

function HomePageRedux(props) {
  let renderCard = () => {
    return props.dataObject.data.dataObject.map((object, index) => {
      return <CardRedux object={object} key={index}/>});
  };
  return (
    <div className='reduxMain'>
      <div className='reduxContent'>
        {renderCard()}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    dataObject : state
  };
};
export default connect(mapStateToProps,null)(HomePageRedux);