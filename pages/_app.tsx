import '../styles/global.css'
import { AppProps } from 'next/app';
import Layout from '../components/layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
);
}

//export function reportWebVitals(metric) {
//  console.log(metric);
//}
