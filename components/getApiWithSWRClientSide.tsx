import getApiData from '../lib/getApiWithSWR'

export default function SWRComponent() {
  const { content, isLoading, isError } = getApiData();

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>failed to load</div>
  return <h3>{content.text}</h3>
}
