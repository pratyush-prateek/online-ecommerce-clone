import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const getCollectionItem = (collectionItem) => {
  const { id } = collectionItem;
  return <CollectionItem key={id} item={collectionItem} />;
};

const CollectionPreview = (props) => {
  const { items, title } = props;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => {
            return idx < 4;
          })
          .map((item) => {
            return getCollectionItem(item);
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
