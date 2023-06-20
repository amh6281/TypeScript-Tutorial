import React from "react";
import Item from "./Item";

const ItemList = () => {
  return (
    <div>
      <Item
        id={1}
        title="title"
        extra={[
          {
            id: 1,
            username: "jane",
          },
        ]}
      />
    </div>
  );
};

export default ItemList;
