import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import canadianprovinces from './data/canadianprovinces';
import americanstates from './data/americanstates';
import provincesstates from './data/provincesstates';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App provinceData={canadianprovinces} statesData={americanstates} data={provincesstates}/>
  </React.StrictMode>,
  document.getElementById('wp-react-ctr')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
