import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import AboutMe from './pages/AboutMe/AboutMe';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/checkout' element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
          <Route path='/about' element={<AboutMe></AboutMe>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
