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

      <table>
					<thead>
						<tr>
							<th>Route</th>
							<th>Start Position (Lat/Long)</th>
							<th>End Position (Lat/Long)</th>
						</tr>
					</thead>
					<tbody>
						{routes?.map(r => 
							<tr>
								<td>{r.title}</td>
								<td>{r.startPosition.lat} / {r.startPosition.lat}</td>
								<td>{r.endPosition.lng} / {r.endPosition.lng}</td>
							</tr>
						)}
					</tbody>
      </table>

       
      </header>
    </div>
  );
}

export default App;
