import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import AlertState from './context/alert/AlertState';
import UserState from './context/user/UserState';
import Note from './components/Note';

function App() {
  return (
    <>
      <Router>
        <AlertState>
          <UserState>
            <NoteState>
              <Navbar />
              <Alert />
              <div className="container">
                <Routes>
                  <Route exact path='/' element={<Note />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/login' element={<Login />} />
                  <Route exact path='/signup' element={<Signup />} />
                </Routes>
              </div>
            </NoteState>
          </UserState>
        </AlertState>
      </Router>
    </>
  );
}

export default App;
