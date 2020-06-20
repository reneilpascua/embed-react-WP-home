import React, {Component} from 'react';
import logo from './logo.svg';
import ProvinceListItem from './components/ProvinceListItem';

// import './App.css';


class App extends Component {
  render(){

    // const {provinceData} = this.props;

    // const provinceList = provinceData.map(province => {
    //   // return(<li>
    //   //   {province.name}
    //   // </li>);

    //   return(<ProvinceListItem province={province}/>);
    // });

    const {statesData} = this.props;

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        
        {/* <ul>
          {provinceList}
        </ul> */}

        {/* {provinceList} */}

        <AmericanStates data={statesData}/>


      </div>
    );
  }
}

export default App;
