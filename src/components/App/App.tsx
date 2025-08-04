import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Content } from '../Content/Content';
import Header from '../Header/Header';
import './App.css';
export const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
