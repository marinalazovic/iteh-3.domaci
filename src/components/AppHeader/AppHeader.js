import React from 'react';
import './AppHeader.css';

const AppHeader = () => (
  <div className="wrapper">
    <ul>
      <li><a href="/" className="recipeBook">Zdravo zdravo!</a></li>
      <li><a href="/">Recepti</a></li>
      <li><a href="/fitness">Trening</a></li>
      <li><a href="/self-development">Self-development</a></li>
    </ul>
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
