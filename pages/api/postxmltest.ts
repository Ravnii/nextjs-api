import { NextApiRequest, NextApiResponse } from 'next';

const postxmltest = (_: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://postxmltest.blob.core.windows.net/myblobcontainer/myblockblob/myendpointblob.xml?sp=racwdli&st=2023-11-09T09:31:53Z&se=2023-11-09T17:31:53Z&sv=2022-11-02&sr=c&sig=8lUNXkiJOXkcd4AkXMtihQJlaXwUhC0PCCKgEivCWtM%3D'
  const body = _.body;

  fetch(url, {
    method: 'PUT',
    headers: {
      'x-ms-version': '2023-11-03',
      'x-ms-blob-type': 'BlockBlob'
    },
    body: `Called from M3
    body-length: ${body.length}
    body-content: ${body}`
  }).then((result) => {
    res.status(200).json(result)
  });
}

export default postxmltest;
