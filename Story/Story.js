import { getStory } from "../API/HackerNews";
import styles from "../styles/Story.module.css";

import Link from 'next/link'

import {mapTime} from '../mappers/mapTime'


import { useState, useEffect } from "react";

export default function Story({storyid}) {
  const [Story, setStory] = useState({});

  useEffect(() => {
    getStory(storyid).then((data) => data && data.url && setStory(data));
  }, []);

  return Story && Story.url ? (
    <div className={styles.storywrapper}>
      <div className={styles.storyTitle}></div>
      <a className={styles.urlTag} href= {'/Storypage/' + storyid}>
        {Story.title}
      </a>
      <div className={styles.storyMeta}>
        <span>
          <span className={styles.storyMetaElement}>By:</span>
          {Story.by}
        </span>

        <span className={styles.story__time}>
        <span className={styles.storyMetaElement}>Posted:</span>
          {` `}

          {mapTime(Story.time)}

        </span>
      </div>
    </div>
      ) : null
};
