import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import FightersPage from './FightersPage';
import FightersForm from './FightersForm';
import Navbar from './Navbar';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [fighters, setFighters] = useState([]);
  
  // function handleAddToy(newFighter) {
  //   setFighters([...fighters, newFighter]);
  // }

  useEffect(() => {
    fetch("http://localhost:3000/fighters")
      .then((r) => r.json())
      .then((fighters) => setFighters(fighters));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={FightersPage} />
        <Route path='/FightersForm' component={FightersForm} />
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <Navbar />
    //   <Header />
    //   <FightersPage fighters={fighters} />
    // </div>
  );
}

export default App;

