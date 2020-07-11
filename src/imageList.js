import React from 'react';
import './image-list.css';
import ShowImage from './showimages';

const ImageList = (props) => {
    const image =  props.images.map((image)=> {
       // return (<img key={id} src={urls.regular} alt={description}/ >);
        return <ShowImage key={image.id} images={image} />
    });
        return(
            <div className="imageList">
                {image}
            </div>
        );
}

export default ImageList;