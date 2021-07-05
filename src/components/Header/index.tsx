import React from 'react';

import { Container } from './styles';
import logoNetflix from '../../assets/images/logoNetflix.png';
import avatar from '../../assets/images/avatarNetflix.png';

type HeaderProps = {
  blackState: boolean;
};

function Header({ blackState }: HeaderProps): JSX.Element {
  return (
    <Container className={blackState ? 'black' : ''}>
      <div className="logo">
        <a href="/">
          <img src={logoNetflix} alt="Netflix" />
        </a>
      </div>
      <div className="user">
        <a href="/">
          <img src={avatar} alt="Usuário" />
        </a>
      </div>
    </Container>
  );
}

export default Header;
