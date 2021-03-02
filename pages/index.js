import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getStoryIds} from '../API/HackerNews'
import StoriesContainer from '../StoriesContainer/StoriesContainer'
import Link from 'next/link'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mynews.fyi - Simple headlines</title>
      </Head>
      <StoriesContainer />
    </div>
  )
}
