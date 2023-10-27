import logo from './logo.svg';
import './App.css';
import Loginpage from './components/loginpage';
import { Route, Routes } from 'react-router-dom';
import Login_form from './components/login_form';
import Signup from './components/signup_form';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login_form />}/>
        <Route path='/login' element={<Login_form/>}/>
        <Route path='/signup' element={<Signup />} />
      {/* <Loginpage/> */}
    </Routes>
  );
}

export default App;
