import React from 'react';

function makeRequest() {
  const Http = new XMLHttpRequest();
  Http.open("GET", "http://localhost:3000/query");
  Http.send();
}

function App() {
  return (<><button onClick={() => {makeRequest()}}>make "query" request</button></>);
}

export default App;
