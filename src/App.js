import React, {useState} from "react";
import "./App.css";

function App() {
  const [long_link, set_long_link]=useState(null);
  const [display_link, set_display_link]=useState(null);
  function get_long_link(val){
    set_long_link(val.target.value);
  }
  const func1 = () => {
    fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: {
        Authorization: `Bearer 2d1739419f49115afad641f11c4cf90cc5ecf36c`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: long_link,
        domain: "bit.ly",
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      set_display_link(data.link);
    });
  };
  return (
    <div className="App">
      <div className="header glow">
        Link Shortner
      </div>
      <div class='bottom-part'>
        <input type="text" placeholder="Enter the URL" onChange={get_long_link} onKeyDown={func1} ></input>
        <button onClick={func1}>
          Shorten
        </button>
        <br />
        <div className="border">
          <span id="id1">{display_link}</span>
          <button id="id2" onClick={() =>  navigator.clipboard.writeText(document.getElementById("id1").innerText)}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
