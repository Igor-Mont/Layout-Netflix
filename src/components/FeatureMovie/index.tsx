import React from 'react';

import { Container } from './styles';

type FeatureMovieProps = {
  item: {
    original_name?: string;
    backdrop_path?: string;
    vote_average?: number;
    number_of_seasons?: number;
    overview?: string;
    first_air_date?: string;
    id?: number;
    genres?: [
      {
        id: number;
        name: string;
      },
    ];
  };
};

function FeatureMovie({ item }: FeatureMovieProps): JSX.Element {
  const date = item.first_air_date?.slice(0, 4);
  const genres: string[] = [];
  item.genres?.forEach((val, i) => genres.push(val.name));

  let description = item.overview;
  if (typeof description === 'string') {
    if (description.length > 200) {
      description = `${description.substring(0, 200)}...`;
    }
  }
  return (
    <Container
      path={`url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}
    >
      <div className="transparency-vertical">
        <div className="transparency-horizontal">
          <div className="featured-name">{item.original_name}</div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{date}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured-description">{description}</div>
          <div className="featured-buttons">
            <button type="button" className="btn-watch">
              <a href={`/watch/${item.id}`}>▶ Assitir</a>
            </button>
            <button type="button" className="btn-list">
              <a href={`/list/add/${item.id}`}>+ Minha Lista</a>
            </button>
          </div>
          <div className="featured-genres">
            <strong>Gêneros:</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default FeatureMovie;
