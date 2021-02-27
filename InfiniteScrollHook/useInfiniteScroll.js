import { useState, useEffect } from 'react'

import { MAX_STORIES, STORY_INCREMENT } from '../Constants/Constants'

export const useInfiniteScroll = () => {
    const [loading,setLoading] = useState(false)

    const [count, setCount] = useState(STORY_INCREMENT)

    const handleScroll = () => {
        if(
            window.innerHeight + document.documentElement.scrollTop !== 
            document.documentElement.offsetHeight || loading 
        ) {
            return false;
        }
        setLoading(true);
    }


    useEffect(() => {
  
        if(!loading) return;

        if(count + STORY_INCREMENT >= MAX_STORIES) {
            setCount(MAX_STORIES)
        } else {
            setCount(count + STORY_INCREMENT)
        }

        setLoading(false);
  
    }, [loading])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return { count }


}