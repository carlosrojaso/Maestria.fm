import Subscribe from './Subscribe';
import Link from 'next/link';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Link href="/">
        <a aria-label="Syntax.FM">
          <img className="header__logo" src="/static/logo.png" alt="Syntax" />
        </a>
      </Link>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">Un pequeño pedazo de Internet para escuchar sobre Javascript.</h2>
      </div>
      <div className="people">
        <div className="person">
          <img src="/static/wes400x400.jpg" alt="Wes Bos" className="avatar" />
          <h3>Carlos Rojas</h3>
          <a
            target="_blank"
            href="https://twitter.com/carlosrojas_o"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @carlosrojas_o
          </a>
          <p>
           JavaScript Developer + @apress Author ⌨️ 
          </p>
        </div>

        <div className="person">
          <img
            src="/static/nico.jpg"
            alt="Scott Tolinski"
            className="avatar"
            rel="noopener noreferrer"
          />
          <h3>Nicolas Molina</h3>
          <a
            target="_blank"
            href="https://twitter.com/nicobytes"
            className="person__social person__social--twitter"
            rel="noopener noreferrer"
          >
            @nicobytes
          </a>
          <p>
            Google Developer Expert in #Angular and #WebTechnologies.
          </p>
        </div>
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
