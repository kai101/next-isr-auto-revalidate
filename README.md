# Next ISR Auto Revalidate

This plugins is made to help auto revalidate important pages below 60 seconds.

## Problem statements
ISR revalidate during the first call to page after the cache is expired. How do we ensure that the page revalidate consistently even before the first call to the expired page?

Here is the solution, this package helped self hosted nextJS application to revalidate over a fix period of time. This would ensures the cache are being renewed consistently everytime for important page like a home page. 

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
    res,          // Response object from API
    ['/posts/1'], // List of page to regenerate
    5             // Period of revalidate in seconds
  )
  return res.json({ revalidated: true});
}
```

### Final Step

```sh
npm run build
npm run start
```

Call the api endpoint for `/api/revalidate` to start the scheduler and verify revalidate.
