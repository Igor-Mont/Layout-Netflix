import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import Tmdb from '../../tmdb';
import MovieRow from '../../components/MovieRow';
import FeatureMovie from '../../components/FeatureMovie';
import Header from '../../components/Header';
import loading from '../../assets/images/netflix-loading.gif';

interface PropsMovie {
  slug: string;
  title: string;
  items: {
    slug: string;
    title: string;
    results: [
      {
        poster_path: string;
        original_title: string;
      },
    ];
  };
}

interface PropsFeatureMovie {
  number_of_season: number;
}

const test = {};

function Home(): JSX.Element {
  const [movieList, setMovieList] = useState<PropsMovie[]>();
  const [featureData, setFeatureData] = useState(test);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);

      const originals = list.filter(item => item.slug === 'originals');
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      console.log(chosenInfo);
      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  // obs: implementar key no tmdb para não usar index do array
  return (
    <Container>
      <Header blackState={blackHeader} />
      {featureData !== test && <FeatureMovie item={featureData} />}
      <section>
        {movieList?.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        <p>Créditos de imagem para a Netflix</p>
        <p>Baseado no tutorial da B7web</p>
        <p>
          Dados obtidos atravéis do site{' '}
          <a target="_blank" href="https://themoviedb.org" rel="noreferrer">
            TheMovieDb
          </a>
        </p>
      </footer>
      {featureData === test && (
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
      )}
    </Container>
  );
}

export default Home;
