import React from 'react'
import styles from './styles.module.scss'
import { EpisodeType } from '../../services/courseService';

interface props{
    episode: EpisodeType;
}
export const EpisodeList = ({episode}:props) => {
    const HandleSecondsToMin = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    }
  return (
    <>
        <div className={styles.episodeCard}>
            <div className={styles.episodeOrderTime}>
                <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
                <p className={styles.episodeTime}>{HandleSecondsToMin(episode.secondsLong)}</p>
            </div>
            <div className={styles.episodeTitleDescription}>
                <p className={styles.Title}>{episode.name}</p>
                <p className={styles.Description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium blanditiis et quos cum, inventore eius quasi odit necessitatibus nisi a harum distinctio possimus consequatur laboriosam! Dolore, asperiores dolores nihil hic laudantium nesciunt iure doloribus facilis at nemo minus voluptatum tempore soluta aperiam commodi quis illum provident, quas voluptatibus veritatis molestias!
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, aut quibusdam! In sunt aut incidunt quibusdam saepe accusantium! Quisquam, sit aut doloremque molestiae maiores omnis consectetur explicabo necessitatibus quas in impedit officia eos facilis vero quo, id aperiam consequatur officiis saepe aliquam est placeat? Laborum a ullam in soluta cupiditate!
                </p>	
            </div>
        </div>
    </>

  )
}
