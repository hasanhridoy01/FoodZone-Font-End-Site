import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contect from './components/Contect/Contect';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contect' element={<Contect></Contect>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
