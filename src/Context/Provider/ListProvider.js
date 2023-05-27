import React, { Component } from 'react'
import { ListConsumer } from '../Consumer/ListConsumer'
import data from '../../Data/data.json';
export default class ListProvider extends Component {
    state = {
        data : data.context,
    };
    setLike = (id) => {
      let updateData = this.state.data.map((object, index) => {
        if (object.id === id) {
          object.like += 1;
        } else {
          object.like += 0;
        };
        return {...object};
      });
      this.setState({data : updateData});
    };
    setImages = (flag, id) => {
      let updateData = this.state.data.map((object, index) => {
        if ( object.id === id ) {
          if ( flag === true ) {
            object.src = object.srcDefaultImages;
            object.flagImages = false;
          } else {
            object.src = object.srcImages;
            object.flagImages = true;
          }
        }
        return {...object};
      });
      this.setState({data : updateData});
    };
  render() {
    return (
      <ListConsumer.Provider value={{data : this.state.data,setLike : this.setLike,setImages : this.setImages}}>
        {this.props.children}
      </ListConsumer.Provider>
    );
  };
};
