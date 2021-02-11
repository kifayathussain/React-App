import React from 'react';
 

const ImagesList = (props)=>{
  const images = props.images.map((image)=>{
        return <img alt=" " style={{width:'50%'}} key={image.id} src={image.urls.regular}/>
    });   
    return <div>{images}</div>;
}

export default ImagesList;