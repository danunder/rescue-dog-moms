import { format, isFuture } from 'date-fns'

export default function parseEpisodes(episodes) { 
  const parsedEpisodes = episodes
              .filter(episode => !isFuture(new Date(episode.published_at)))
              .map(episode => {
      const ep = {
        id: episode.id,
        title: episode.title,
        description: { __html: episode.description },
        published_at: `Published on ${format(new Date(episode.published_at), "PPPP")}`,
        artwork_url: episode.artwork_url,
        audio_url: episode.audio_url
      }
      return ep
  
  })
  return parsedEpisodes;
}

