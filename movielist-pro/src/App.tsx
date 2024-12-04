import React from 'react';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>MovieList Pro</h1>
      </header>
      <main>
        <MovieList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
