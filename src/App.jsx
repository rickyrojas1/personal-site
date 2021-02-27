/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import Animation1 from './components/Animation1/index';
import Animation2 from './components/Animation2/index';
import './App.scss';
import CryptoTicker from './components/CryptoTicker/CryptoTicker';
import github from './img/github.png';
import gitlab from './img/gitlab.png';
import linkedIn from './img/linkedIn.png';
import email from './img/email.png';

const App = () => (
  <div className="app">
    <div className="ticker">
      <CryptoTicker />
    </div>

    <div className="content">
      <div className="mobile-name">
        <h1>
          Ricky Rojas
        </h1>
      </div>

      <div className="animation">
        <Animation1 />
        <Animation2 />
      </div>

      <div className="social-links">
        <a target="_blank" href="https://www.github.com/rickyrojas1">
          <img className="social-link" src={github} alt="" />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/rickyrojas1/"
        >
          <img className="social-link" src={linkedIn} alt="" />
        </a>
        <a target="_blank" href="mailto:rickyrojas@me.com">
          <img className="social-link" src={email} alt="" />

        </a>
        <a target="_blank" href="https://www.gitlab.com/rickyrojas">
          <img className="social-link gitlab" src={gitlab} alt="" />

        </a>

      </div>
    </div>
  </div>

);

export default App;
