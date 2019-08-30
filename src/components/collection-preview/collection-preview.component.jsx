import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.splice(0, 4).map(({ id, ...otherCollectionItemProps }) => {
          return <CollectionItem key={id} {...otherCollectionItemProps} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
