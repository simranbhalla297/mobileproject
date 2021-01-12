import React from "react";

function Cards(props) {
  console.log(props.i);
  var styleClass = "";
  if (props.i == 0) {
    styleClass = "firstbox";
  } else if (props.i == 1) {
    styleClass = "secondbox";
  } else if (props.i == 2) {
    styleClass = "thirdbox";
  }

  return (
    <div className={"cards " + styleClass}>
      <div className="circle"></div>
      <div className="card-wrapper">
        <h3>{props.details.heading}</h3>
        <p>{props.details.para}</p>
      </div>
    </div>
  );
}

export default Cards;
