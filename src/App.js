import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/content';
import Featured from './pages/content2';
import Products from './pages/content3';
import Review from './pages/content4';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Featured />
      <Products />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
