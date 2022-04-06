
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './Components/Home/HomePage';
import UnitsPage from './Components/Units/UnitsPage';
import UnitDetailPage from './Components/Unit Detail/UnitDetailPage';

import UserProvider from './redux/context/Provider';

function App() {
  return ( 
    <UserProvider>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />        
            <Route path='/units' element={<UnitsPage />}/>
            <Route path='/unit-detail' element={<UnitDetailPage />}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
