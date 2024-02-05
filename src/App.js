import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/main';
import AboutUsPage from './Pages/aboutUs';
import ContactPage from './Pages/contact';
import ManPage from './Pages/man';
import WomenPage from './Pages/women';


function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path={'/aboutUs'} element={<AboutUsPage />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/man'} element={<ManPage />} />
        <Route path={'/women'} element={<WomenPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App;