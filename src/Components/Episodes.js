import React, { useState, useEffect } from "react";
import "../App.css";
import parseEpisodes from './Helpers/ParseEpisodes'


function Episodes() {

  useEffect(() => {
    fetchEpisodes();
  }, [])

  const [episodes, setEpisodes] = useState([]);

  const fetchEpisodes = async () => {
    const data = await fetch('https://www.buzzsprout.com/api/1544806/episodes.json', {
      headers: {
        "Authorization":"Token token=6e72fd1f22bbb78e9ca9875fa08970e4"
      }
    })
    const unparsedEpisodes = await data.json()
    setEpisodes(parseEpisodes(unparsedEpisodes))
  }
  const [selected, setSelected] = useState('')

  return (
      <div className="container">
      {episodes.map(({
        id,
        artwork_url,
        title,
        published_at,
        audio_url,
        description
      }) => {
        return (
          <article className="media episode" key={id} onClick={ () => setSelected(id)}>
            <div className="always_show">
              <img src={artwork_url} alt="Episode Artwork" />
              <div>
                <h1>{title}</h1>
                <h3>{published_at}</h3>
                <audio controls>
                  <source src={audio_url} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            {selected === id && (
                <div className="hide_away" dangerouslySetInnerHTML={description}></div>
            )}
          </article>
        )
      })}
    </div>
  );
}

export default Episodes;
