import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function Portfolio () {

  return (
    <div>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <Main />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default Portfolio;