import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  
  return (
    <div>
      <h2>{props.name}</h2>
      <img
        src="{props.img}"
        alt="avatar_img"
      />
      <p>{props.tell}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
  tell="123456879"
  email="@beyonce.com"
  />
  <Card
   name= "salman"
  img="https://5.imimg.com/data5/SELLER/Default/2021/1/VE/JJ/WG/104656633/fresh-whole-norwegian-atlantic-salmon-gutted-head-on-avg-4-5-kg-each--500x500.jpg"
tell="5631321654131"
email="@salmon.com"

/>
  </div>,
  document.getElementById("root")
);