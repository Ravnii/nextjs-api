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
    body: 'Called from M3'
  });

  // https://postxmltest.blob.core.windows.net/?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-11-06T18:52:01Z&st=2023-11-06T10:52:01Z&spr=https&sig=TDGRx4FpPmp%2BWzTwz5iXM1VSnLS0qNiE9QshrkNyVFM%3D

  // https://postxmltest.blob.core.windows.net/myblobcontainer?sp=racwdli&st=2023-11-06T11:00:21Z&se=2023-11-06T19:00:21Z&spr=https&sv=2022-11-02&sr=c&sig=gOl4SHR7whw6axJyo5wDQ15nXYu34FKB7lORFldj0uQ%3D


  res.status(200).json('success');
}

export default postxmltest;