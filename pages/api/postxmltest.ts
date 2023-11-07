import { NextApiRequest, NextApiResponse } from 'next';

const postxmltest = (_: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://postxmltest.blob.core.windows.net/myblobcontainer/myblockblob/myendpointblob.xml?sp=racwdli&st=2023-11-07T07:29:35Z&se=2023-11-07T15:29:35Z&spr=https&sv=2022-11-02&sr=c&sig=am1UEUIlcqpWg80w%2FBBb3nabkxCPq8sXxA6xmckR%2BFo%3D'
  const body = _.body;
  /*
  fetch(url, {
    method: 'PUT',
    headers: {
      'x-ms-version': '2023-11-03',
      'x-ms-blob-type': 'BlockBlob'
    },
    body: `Called from M3
    body-length: ${body.length}
    body-content: ${body}
    request: ${stringify(_)}`
  }).then((result) => {
    res.status(200).json(result)
  });
  */

  const chunks = [];

  _.on('readable', () => {
    let chunk;
    while (null !== (chunk = _.read())) {
      chunks.push(chunk);
    }
  });
  
  _.on('end', () => {
    const content = chunks.join('');
    fetch(url, {
      method: 'PUT',
      headers: {
        'x-ms-version': '2023-11-03',
        'x-ms-blob-type': 'BlockBlob'
      },
      body: content,
    })
  });

}

function stringify(obj) {
  let cache = [];
  let str = JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}

export default postxmltest;