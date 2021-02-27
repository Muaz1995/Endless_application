import axios from 'axios'

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';

export const NewStories = `${baseUrl}newstories.json`;

export const storyUrl = `${baseUrl}item/`





export const getStoryIds = async() => {

    const result = await axios.get(NewStories).then(data => data);

    return result;
}

export const getStory = async (storyid) => {
    const result = await axios.get(`${storyUrl + storyid}.json`).then(({data}) => data)
    
    return result;
}

