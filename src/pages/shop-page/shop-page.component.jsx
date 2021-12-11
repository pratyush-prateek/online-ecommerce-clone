import React from "react";
import { SHOP_DATA } from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  getCollectionPreview = (collectionPreviewItem) => {
    return <CollectionPreview {...collectionPreviewItem} />;
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map((collectionPreviewItem) =>
          this.getCollectionPreview(collectionPreviewItem)
        )}
      </div>
    );
  }
}

export default ShopPage;
