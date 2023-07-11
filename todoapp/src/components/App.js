import '../components/App.css';
import Header from './header';
import Note from './note';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='notes'>
      <Note />
      </div>
    </div>
  );
}

export default App;
