import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Route } from './utils/models'
import api  from './utils/api'
import './App.css';

function App() {
  const [routes, setRoutes] = useState<Route[]>([
    
  ]);
  const API_URL = "localhost:3000";

  useEffect( () => {
    api.get('routes')
      .then((res) => {
        console.log(res);
        setRoutes(res.data);
      });
      console.log(routes);
      
      
    // fetch("http://localhost:3000/routes")
    //   .then((data) => data.json())
    //   .then((data) => setRoutes(data));
  }
  ,[]);

  return (
    <div className="App">
      <header className="App-header">
        <ul className="list">
          {routes?.map((r, k) => (
            <li className="route-item" key={k}>
              {"Title: " + r.title} <br/>
              {"Start Position: " + "Lat:" + r.startPosition.lat + ";Long:" + r.startPosition.lng} <br/>
              {"End Position: " + "Lat:" + r.endPosition.lat + ";Long:" + r.endPosition.lng} <br/>
              <br/>
            </li>
            
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
