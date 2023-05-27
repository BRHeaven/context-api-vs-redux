import {convertImageTypes, likeTypes} from "../Types/mainTypes";
export const setLike = (id) => {
  return {
    type : likeTypes,
    id,
  };
};
export const convertImage = (flagImages,id) => {
  return {
    type : convertImageTypes,
    id,
    flagImages,
  };
};