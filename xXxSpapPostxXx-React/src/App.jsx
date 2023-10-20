import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import InitialMainCarrusel from './screens/InitialMain/InitialMain';
import AboutUs from './screens/AboutUs/AboutUs';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import Home from './screens/Home/Home';


function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<InitialMainCarrusel />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
