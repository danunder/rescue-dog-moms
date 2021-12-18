import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Banner from '../Images/RDM-logo.png'
import Instagram from '../Images/6-60185_instagram-logo-png-black.png'
import Spotify from '../Images/Spotify_Icon_RGB_Black.png'
import Apple from '../Images/Apple_Podcast_Icon.png'
import Google from "../Images/google_podcasts_logo_icon_145228.png"

function Nav() {
  return (
    <nav>
      <img src={Banner} alt="Podcast Logo"/>
      <div className="links">
        <ul className="nav-links">
          <Link to="/episodes">
            <li>Episodes</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <a href="https://www.shophotdiggity.com/shop/p/foster-fail-t-shirt" target='blank'>
            <li>Shop</li>
          </a>
        </ul>
        <div className="icons">
          <a href="https://www.instagram.com/rescuedogmomspod/" rel="noreferrer" target="_blank"><img src={Instagram} alt="Spotify logo" /></a>
          <a href="https://open.spotify.com/show/26EcaDOS5HTYu7FTeCWa1F?si=Xks9l6AAThu5YkIaaiaBlw" rel="noreferrer" target="_blank"><img src={Spotify} alt="Spotify logo" /></a>
          <a href="https://podcasts.apple.com/ca/podcast/rescue-dog-moms/id1548403423" rel="noreferrer" target="_blank"><img src={Apple} alt="Apple podcasts logo" /></a>
          <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNTQ0ODA2LnJzcw" rel="noreferrer" target="_blank"><img src={Google} alt="Google podcasts logo"/></a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
