import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './register/Register';
import Loginn from './register/Loginn';
import Contact from './register/Contact';
import GetData from './register/GetData';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Register/>}/>
      <Route exact path='/login' element={<Loginn/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/getdata' element={<GetData/>}/>
    </Routes>
    </>
  );
}

export default App;


