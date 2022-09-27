import { fetcher } from './fetcher'
import useSWR from 'swr'

export default function useSWRToGetApiData() {
  const { data, error } = useSWR(`/api/Calendar`, fetcher);

  return {
    content: data,
    isLoading: !error && !data,
    isError: error,
  }
}
