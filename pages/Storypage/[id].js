import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { getStory } from "../../API/HackerNews";

import styles from "../../styles/Story.module.css";

import {mapTime} from '../../mappers/mapTime'




const DetailsPage = () => {
  const [stories, setStories] = useState({});



  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    getStory(id).then((data) => data && data.url && setStories(data));

    console.log('run')
  }, [id]);



  return stories && stories.url ? (
      <>

      <div>

      </div>
    <div className={styles.storywrapper}>
      <div className={styles.storyTitle}></div>
      <a className={styles.urlTag} href= {stories.url}>
        {stories.title}
      </a>
      <div className={styles.storyMeta}>
        <span>
          <span className={styles.storyMetaElement}>By:</span>
          {stories.by}
        </span>

        <span className={styles.story__time}>
        <span className={styles.storyMetaElement}>Posted:</span>
          {` `}
          {mapTime(stories.time)}
        </span>
      </div>
    </div>
    </>
      ) : null
};
export default DetailsPage;
