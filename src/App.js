
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<ChatPage />} />
        </Routes> 
      </BrowserRouter> 
       
    </div>
  );
}

export default App;
