import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import MainPage from './pages/main'


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
