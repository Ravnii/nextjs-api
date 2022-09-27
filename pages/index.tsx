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
  allPostsData
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
          <p className={styles.subtitle}>Software Developer - PHP - Next.js - Svelte</p>
        </div>
      </div>
      <div className={styles.container}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <Header text="My Blog" />
          <h5>Client side fetch: </h5>
          {/* /components/getApiClientSide with react useEffect */}
          <p>Here was once a api fetch</p>
          <div>
            <MyButton />
          </div>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
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
      allPostsData
    },
  }
}
