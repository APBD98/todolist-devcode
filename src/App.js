import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/dashboard/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header/Header';
import ActivityDetail from './pages/activityDetail/ActivityDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/'  element={<Dashboard/>}/>
          <Route path='/:id' element={<ActivityDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
