import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mainlayout from './Components/Mainlayout'
import DashBoard from './pages/DashBoard';

function App() {
  return (
    <>
      <Mainlayout>
        <Routes>
          <Route path='/' element={<DashBoard /> } />
        </Routes>
      </Mainlayout>
    </>
  );
}

export default App;
