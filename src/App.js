import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const GetVideo =() => {
    fetch(
      `http://shibe.online/api/shibes?count=20`,
    )
      .then((res) => console.log(res))
      // .then(response => console.log(response));
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={GetVideo}>CLick here</button>
      </header>
    </div>
  );
}

export default App;
