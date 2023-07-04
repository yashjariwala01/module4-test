import './App.css';
import { Routes , Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import NavBar from './components/NavBar';
// import Demo from './components/Demo'
// 
{/*  */}

function App() {
  return (
    <div className="App">
      <NavBar/>      
      <Routes>
          <Route path='/' element={< HomePage/>}/>
          <Route path='/item/:id' element={<DetailsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
