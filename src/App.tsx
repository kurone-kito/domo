import React from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';
import './App.css';

const Item: React.FC<Coords> = ({ children }) => (
  <div style={{ fontSize: '3rem' }}>{children}</div>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: '2rem' }}>
          Kastelo: Practice for Google Map API.
        </div>
        <div style={{ height: '90vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: `${process.env.REACT_APP_GOOGLE_API_KEY}`
            }}
            defaultCenter={{ lat: 35.68, lng: 139.75 }}
            zoom={15}
          >
            <Item lat={35.682} lng={139.767}>
              🦕
            </Item>
            <Item lat={35.672} lng={139.75}>
              💕
            </Item>
          </GoogleMapReact>
        </div>
      </header>
    </div>
  );
};

export default App;
