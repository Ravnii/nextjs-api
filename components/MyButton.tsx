import React, { useState } from 'react'

function MyButton() {
  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return <button onClick={handleClick}>Likes ({likes})</button>
}

export default MyButton
