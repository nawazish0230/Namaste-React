import React from "react";
import MenuItem from "./MenuItem";

const ItemList = (props) => {
  const { itemCards } = props;
  return (
    <div
      data-testid="itemList"
      className="flex justify-center flex-col text-center"
    >
      {itemCards.map((item) => (
        <MenuItem itemInfo={item} key={item.card.info.id} />
      ))}
    </div>
  );
};
export default ItemList;
