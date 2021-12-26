import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SeasonalPanel } from './components/SeasonalPanel';
import background from "./static/assets/produce.jpeg";

function App() {
  return (
    <div style={{ height: '100%' }}>
      <div style={{ paddingTop: '32px', width: '70%', margin: 'auto' }}>
        <SeasonalPanel/>
      </div>
    </div>
  );
}

export default App;
