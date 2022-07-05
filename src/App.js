import React from 'react';
import './App.css';
import Dropdown from './components/Dropdown/Dropdown';
import Header from './components/Header/Header';
import data from './data/data.json';

function App() {
  const {
    nodes: { dropdown },
    author,
  } = data;

  return (
    <div className="App">
      <Header name={author} />
      <Dropdown title={dropdown.title} options={dropdown.options} />
    </div>
  );
}

export default App;
