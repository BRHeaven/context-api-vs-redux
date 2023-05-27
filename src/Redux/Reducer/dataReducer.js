/* eslint-disable no-unreachable */
import data from '../../Data/data.json';
import { convertImageTypes, likeTypes } from '../Types/mainTypes';
const reducerData = {
    dataObject : data.redux,
};
const dataReducer = ( state = reducerData, action ) => {
    switch (action.type ) {
        case likeTypes:{
            let updateState = state.dataObject;
            let index = updateState.findIndex( object => object.id === action.id);
            if (index !== -1) {
                updateState[index].like += 1;
            };
            state.dataObject = updateState;
            return {...state};
        }; break;
        case convertImageTypes:{
            let updateState = state.dataObject;
            let index = updateState.findIndex( object => object.id === action.id);
            if (index !== -1) {
                if (updateState[index].flagImages === false) {
                    updateState[index].src = updateState[index].srcImages;
                    updateState[index].flagImages = true;
                } else {
                    updateState[index].src = updateState[index].srcDefaultImages;
                    updateState[index].flagImages = false;
                };
            };
            state.dataObject = updateState;
            return {...state};
        }; break;
        default: ;
    };
    return {...state};
};
export default dataReducer;