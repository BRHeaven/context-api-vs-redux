import React from 'react'
import { ListConsumer } from '../Context/Consumer/ListConsumer'
import CardContext from './CardContext';

export default function ListContext() {
  return (
    <ListConsumer.Consumer>
        {(value) => {
            return value.data.map((object, index) => {
                return <CardContext object={object} setLike={value.setLike} setImage={value.setImages} key={index}/>
            });
        }}
    </ListConsumer.Consumer>
  )
}
