import React from "react";
import { useState } from "react";
import data from "../data";
import { CardItem } from "./Card";

const CardList = () => {
  const [cardData, setCardData] = useState([...data]);
  const [previousCard, setPreviousCard] = useState(null);

  const onClickHandler = id => {
    const currentCard = cardData.find(card => card.id === id);
    if (currentCard.isOpen) return;
    const newData = cardData.map(item => {
      if (item.id === id) {
        return { ...item, isOpen: true };
      } else {
        return item;
      }
    });

    if (previousCard) {
      if (previousCard.name === currentCard.name) {
        setCardData(newData);
      } else {
        setCardData(newData);
        setTimeout(() => {
          setCardData(prev =>
            prev.map(card =>
              card.id === id || card.id === previousCard.id
                ? { ...card, isOpen: false }
                : card
            )
          );
        }, 700);
      }
      setPreviousCard(null);
    } else {
      setCardData(newData);
      setPreviousCard(currentCard);
    }
  };
  return (
    <div className="card-item-list">
      {cardData.map(item => {
        return (
          <CardItem
            key={item.id}
            id={item.id}
            image={item.pic}
            onClick={onClickHandler}
            isOpen={item.isOpen}
          ></CardItem>
        );
      })}
    </div>
  );
};

export default CardList;
