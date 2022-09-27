export async function getApiString() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:7071/api/Calendar')
  const data = await res.json()

  return data
}
