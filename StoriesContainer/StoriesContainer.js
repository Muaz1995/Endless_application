import { useState, useEffect } from "react";

import { getStoryIds } from "../API/HackerNews";
import Story from "../Story/Story";

import styles from '../styles/GlobalStyles.module.css'

import { useInfiniteScroll } from '../InfiniteScrollHook/useInfiniteScroll'



export default function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  const { count }  = useInfiniteScroll();

  console.log('count', count)

  useEffect(() => {
    getStoryIds().then(({ data }) => setStoryIds(data));
  }, []);

  return (
    <div className = {styles.GlobalStyles}>
        <h1>News Stories</h1>
        <hr/>

        {
            storyIds.slice(0, count).map((storyId) => (
                <Story key = {storyId} storyid = {storyId} />
            ))}
    </div>
  );
}



