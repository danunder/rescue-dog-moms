import React, { useState, useEffect } from "react";
import "../App.css";
import parseEpisodes from './Helpers/ParseEpisodes'


function Episodes() {

  useEffect(() => {
    fetchEpisodes();
  }, [])

  const [episodes, setEpisodes] = useState([]);
  const [selected, setSelected] = useState('')

  const fetchEpisodes = async () => {
    const data = await fetch('https://www.buzzsprout.com/api/1544806/episodes.json', {
      headers: {
        'Authorization':'Token token=6e72fd1f22bbb78e9ca9875fa08970e4'
      }
    })
    const unparsedEpisodes = await data.json()
    console.log(unparsedEpisodes)
    setEpisodes(parseEpisodes(unparsedEpisodes))  
  }
  
  return (
      <div className="container">
      {episodes.map(episode => {
        return (
          <article className="media episode" key={episode.id} onClick={ () => setSelected(episode.id)}>
            <div className="always_show">
              <img src={episode.artwork_url} alt="Episode Artwork" />
              <div>
                <h1>{episode.title}</h1>
                <h3>{episode.published_at}</h3>
                <audio controls>
                  <source src={episode.audio_url} type="audio/mpeg" />
                </audio>
              </div>
            </div>
            {selected === episode.id && (
              <div class="hide_away">
                <aside></aside>
                
                <div dangerouslySetInnerHTML={episode.description}></div>
              </div> )}
          </article> 
        )
      })}
    </div>
  );
}

export default Episodes;
