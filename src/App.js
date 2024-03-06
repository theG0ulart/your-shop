import logo from './logo.svg';
import './App.css';
import Products from './pages/products';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
