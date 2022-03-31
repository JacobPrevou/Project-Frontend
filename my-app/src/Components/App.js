import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import FightersPage from './FightersPage';
import FightersForm from './FightersForm';
import FavoriteFightersList from './FavoriteFightersList';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [fighters, setFighters] = useState([]);
  
  function handleAddFighter(newFighter) {
    setFighters([...fighters, newFighter]);
  }

  useEffect(() => {
    fetch("http://localhost:3000/fighters")
      .then((r) => r.json())
      .then((fighters) => setFighters(fighters));
  }, []);
  

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
            <Link to="/FightersPage">Fighters Page</Link>
            </li>
            <li>
            <Link to="/FavoriteFightersList">Favorite Fighters List</Link>
            </li>
            <li>
            <Link to="/FightersForm">Add Fighter Form</Link>
            </li>
            <li>
            <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}>
            
          </Route>
          <Route path="/FightersPage" element={<FightersPage/>}>
            
          </Route>
          <Route path="/FavoriteFightersList" element={<FavoriteFightersList fighters={fighters}/>}>
            
          </Route>
          <Route path="/FightersForm" element={<FightersForm onAddFighter={handleAddFighter}/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/* <BrowserRouter>
<Navbar />
<Routes>
  <Route path="/FightersPage" element={<FightersPage />}>
    <FightersPage fighters={fighters} onAddFighter={handleAddFighter} />
  </Route>
  <Route path="/FightersForm" element={<FightersForm />}>
    <FightersForm />
  </Route>
 
</Routes>
</BrowserRouter> */


/* <Routes>
  <Route path='/' exact component={FightersPage}>
    <FightersPage />
  <Route path='/FightersForm' component={FightersForm} >
    <FightersForm />
</Routes> */

// <div className="App">
    //   <Navbar />
    //   <Header />
    //   <FightersPage fighters={fighters} />
    // </div>
