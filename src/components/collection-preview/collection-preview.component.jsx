import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(item => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
