const Subscribe = props => (
  <div className="subscribe">
    <ul className="subscribe__links">
      <li className="subscribe__link subscribe__link--itunes">
        <a
          target="_blank"
          href="https://itunes.apple.com/us/podcast/ng-podcast/id1235127090?l=es&mt=2"
          rel="noopener noreferrer"
        >
          iTunes
        </a>
      </li>
      <li className="subscribe__link subscribe__link--spotify">
        <a
          target="_blank"
          href="https://open.spotify.com/show/1kr4Um5U7M61nxTtnQhYT9"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
      </li>
    </ul>
  </div>
);

export default Subscribe;
