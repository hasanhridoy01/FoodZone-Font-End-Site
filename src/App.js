import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contect from './components/Contect/Contect';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/Registration/RequireAuth';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contect' element={<Contect></Contect>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/singleproduct/:foodId' element={
          <RequireAuth>
            <SingleProduct></SingleProduct>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
