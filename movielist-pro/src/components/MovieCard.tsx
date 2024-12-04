import React from 'react';
import { Movie } from '../interfaces/Movie';
import '../styles/MovieCard.scss';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.cover} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
    </div>
  );
};

export default MovieCard;
