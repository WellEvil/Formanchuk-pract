import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={''} />
        <Route path={'/main'} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;