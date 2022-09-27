import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { GetServerSideProps } from 'next';

// on request
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
    },
  };
}

function FirstPost({ }) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <p>here was once a text fetch from an api</p>
      {/* /components/getApiWithSWRClientSide.tsx -> /lib/getApiWithSWR with useSWR*/}
      <h3>
        <Link href="/">Back to home</Link>
      </h3>
    </Layout>
  );
}

export default FirstPost
