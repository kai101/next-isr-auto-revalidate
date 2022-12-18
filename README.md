# Next ISR Auto Revalidate

This plugins is made to help auto revalidate important page below 60 seconds.

## Usage

### Installation

yarn add next-isr-auto-revalidate


### Create revalidate API

```js
// pages/api/revalidate.js
import type { NextApiRequest, NextApiResponse } from 'next'
import { autoRevalidate } from 'next-isr-auto-revalidate' // import module
type Data = {
  revalidated: boolean
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  autoRevalidate(
    res, // response object from API
    ['/posts/1'], // list of page to regenerate
    5 // period of revalidate in seconds
  )
  return res.json({ revalidated: true});
}
```

### Final Step

```bash
npm run build
npm run start
```

Call the api endpoint for `/api/revalidate` and verify revalidate.
