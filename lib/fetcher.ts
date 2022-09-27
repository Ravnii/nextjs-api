export const fetcher = (api: string) => fetch(api).then((res) => res.json())
