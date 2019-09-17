import React from "react";
import "./index.css"

function FriendCard(props) {
    return (
    
      <div onClick = {( ) => props.handleImageClick(props.id)}>
        <img className="friend-image" alt={props.name} src={props.image} />
      </div>
      
  );
}

export default FriendCard;