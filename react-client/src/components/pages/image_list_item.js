import React from 'react';

const ImageListItem = ({image}) => {

  return (
    <li className = 'list-group-item'>
      <div className = 'image_list_media'>
        <div className = 'media-left'>
          <img className = 'media-object' src = {image.loc} />
        </div>
        <div className = 'media-body'>
          <div className = 'media-heading'> {image.title} </div>
        </div>
      </div>
    </li>
  );
};

export default ImageListItem;
