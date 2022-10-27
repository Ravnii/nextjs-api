import useSWR from 'swr';

const fetcher = (api: string) => fetch(api).then((res) => res.json())

export default function useSWRToGetApiData(apiString: string) {
  const { data, error } = useSWR(`${apiString}`, fetcher);

  return {
    content: data,
    isLoading: !error && !data,
    isError: error,
  }
}
