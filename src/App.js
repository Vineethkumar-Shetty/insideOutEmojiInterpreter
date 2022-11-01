// import { useState } from "react";
import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🫶": "love and support",
  "❤️": "love and romance",
  "😀": "Grinning Face",
  "🤣": " Rolling on the Floor Laughing",
  "😑": "Expressionless face",
  "🤥": "Lying Face",
  "👍": "Approval or consent",
  "🔥": "Hot || Attractive || Excellent",
  "💀": " dying from extreme laughter, frustration, or affection",
  "🤯": "Mind Blown"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiMeaning(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput]; //when key value is not known, this syntax cab be used to get value
    if (meaning === undefined) {
      meaning = "This emoji is not there in the database";
    }
    setMeaning(meaning);
    console.log(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    console.log(emoji);
  }
  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={emojiMeaning}></input>
      <div>Meaning-: {meaning}</div>
      <h3>emojis we know</h3>
      <ul>
        {emojisWeKnow.map((emoji) => {
          return (
            <li
              onClick={() => emojiClickHandler(emoji)}
              style={{
                display: "inline",
                padding: "0.5rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
