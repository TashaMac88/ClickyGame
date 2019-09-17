import React, { Component } from "react";
import FriendCard from "./Components/FriendCard";
import Nav from "./Components/Nav";
import friends from "./data.json";





//keep track of your state up here you will want to keep track of your data, score, top score and game message/result

//game logic make all of your functions here 

//a function to shuffle your data array look into NPM package shuffle-array or google how to shuffle an array javascript and you will find code for it.  

//function to handle the click of the card that increases score tells the user if their answer was right or wrong (through state) and it will call y

//Goal shelly wants you to be able to map over all your data and have  all your click items loading om the page and have your navbar and card components built . 



class App extends Component {
  state = {
    friends,
    score: 0,
    topscore: 0,
    gamemessage: "Click an Image to Begin!"
  };

  shuffle = data => {
    let i = data.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

  reset = data => {
    const resetData = data.map(item => ({...item, clicked: false}));
    return this.shuffle(resetData);
  };

  handleImageClick = id => {
    let goodGuess = false;
    const newFriends = this.state.friends.map(item => {
     const currentFriend = {...item};
     if (id === currentFriend.id){
       if(!currentFriend.clicked){
         currentFriend.clicked = true;
        goodGuess = true;
       }
     } 
     return currentFriend;
    });

    if(goodGuess) {
      const newScore = this.state.score + 1;

      this.setState({
        friends: this.shuffle(newFriends),
        score: newScore,
        topscore: Math.max(this.state.topscore, newScore),
        gamemessage: "Good Guess! Click Again!"

      })
    }else {

      this.setState({
        friends: this.reset(newFriends),
        score: 0,
        gamemessage: "Bad Guess! Click to Try Again!"

      });
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Nav
      message={this.state.gamemessage}
      score={this.state.score}
      topscore={this.state.topscore} />
      <div className="container">
        <div className="row">
        {this.state.friends.map(friend => (
          <FriendCard
          handleImageClick = {this.handleImageClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
        </div>
        </div>
        </div>
    )        
  }
}
export default App;


//youll want to put your Nav here and map over your data.json to make all your cards like the spongebob activity 
//your going to have to have a handle click function that you have a function for up top and you use in the return
//the handle click fucntion will also have to be passed in props to the card.  and your going to use activity 19-27 basic state as a really basic example.  it won't do the same thing inside the handleclick function but similar 
//<div>Hello</div




