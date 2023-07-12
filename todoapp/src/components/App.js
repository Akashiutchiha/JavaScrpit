import '../components/App.css';
import Header from './header';
import Note from './note';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateNote from './createnote';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='notes1'>
          <Routes>
            <Route path="/" element={<Note></Note>} />
            <Route path="/add" element={<CreateNote/>}/>
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
