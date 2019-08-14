import React from 'react';
import logo from './logo.svg';
import GoogleMapReact, { Coords } from 'google-map-react';
import './App.css';

const Item: React.FC<Coords> = ({ children }) => <div style={{ fontSize: '3rem' }} onClick={() => alert(children)}>{children}</div>;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: '5rem' }}>{process.env.REACT_APP_KITO}</div>
        <div style={{ height: '90vh', width: '100%' }}>
          <GoogleMapReact bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_API_KEY}` }} defaultCenter={{ lat: 35.68, lng: 139.75 }} zoom={15}>
            <Item lat={35.682} lng={139.767}>🦕</Item>
            <Item lat={35.672} lng={139.750}>💕</Item>
          </GoogleMapReact>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
