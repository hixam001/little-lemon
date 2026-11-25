import './App.css';
import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <>
      <section className="container navbar">
        <Header />
        <Nav />
      </section>
      <Main />
      <Footer />
    </>
  );
}

export default App;
