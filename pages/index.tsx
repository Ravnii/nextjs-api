import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Header from '../components/Header'
import MyButton from '../components/MyButton'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import styles from '../styles/layout.module.css'

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.relative}>
        <Image
          priority
          src="/images/frontpage_banner.jpg"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: -1 }}
          alt={'frontpage banner'}
        />
        <div className={styles.dimmer}></div>
        <div className={styles.caption}>
          <h1 className={styles.title}>Jesper Ravn Jørgensen</h1>
          <p className={styles.subtitle}>
            Software Developer : Scrum master : Azure Manager
          </p>
          <p className={styles.subtitle}>PHP - C# - Next.js - Node.js - TypeScript</p>
        </div>
      </div>
      <div className={styles.container}>
        <section
          className={`${utilStyles.headingMd} ${utilStyles.columnFlexCenter} ${utilStyles.sectionBackground}`}
        >
          <Header text="introduction to me" />
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            layout="fixed"
            height={144}
            width={144}
            alt={'profile picture'}
          />
          <p>I am a senior developer who has using most of my professional life working in PHP and frontend frameworks like Angular and React</p>
          <p>But this site i for now purely made in Next.js</p>
          <p>And i am currently working on a new project in C# and .NET Core, which is based on microservice architecture and serverless function</p>
          <p>Feel free to catch me on <a href="mailto:jspr.ravn@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Go To Social Media: email">jspr.ravn@gmail.com</a></p>
        </section>
      </div>
    </Layout>
  )
}

// on build
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}
