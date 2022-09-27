import React, { useState, useEffect } from 'react'

function ApiComponent() {
  const [data, setData] = useState('')

  useEffect(() => {
    ;(async function () {
      const { text } = await (await fetch(`/api/Calendar`)).json()
      setData(text)
    })()
  })

  return <p>{data}</p>
}

export default ApiComponent
