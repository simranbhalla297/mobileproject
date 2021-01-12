import React from "react";
import CardData from "./CardData";
import Cards from "./Cards";
import Form from "./Form";
function CardSection() {
  console.log(CardData);
  return (
    <>
      <div className="card_main">
        <Form />
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="cardsection-wrapper">
          {CardData.map((data, id) => {
            return <Cards details={data} key={id} i={id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default CardSection;
