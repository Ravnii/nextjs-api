import { NextApiRequest, NextApiResponse } from 'next';

const postxmltest = (_: NextApiRequest, res: NextApiResponse) => {
  const {method, body} = _;

  const url = 'https://postxmltest.blob.core.windows.net/myblobcontainer/myblockblob/myendpointblob.xml?sp=racwdli&st=2023-11-07T07:29:35Z&se=2023-11-07T15:29:35Z&spr=https&sv=2022-11-02&sr=c&sig=am1UEUIlcqpWg80w%2FBBb3nabkxCPq8sXxA6xmckR%2BFo%3D'

  fetch(url, {
    method: 'PUT',
    headers: {
      'x-ms-version': '2023-11-03',
      'x-ms-blob-type': 'BlockBlob'
    },
    body: body
  }).then((result) => {
    res.status(200).json(result)
  });
}

export default postxmltest;