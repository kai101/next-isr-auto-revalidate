import type { NextApiResponse } from 'next';

type NextRevalidate =
  | {
      revalidate: (string: string) => void;
    }
  | NextApiResponse;

let timeoutId: NodeJS.Timeout;

async function autoRevalidate(res: NextRevalidate, urls: string[], seconds: number) {
  if (!timeoutId) {
    timeoutId = setInterval(async () => {
      await runBatchRevalidate(res, urls);
    }, seconds * 1000);
  } else {
    await runBatchRevalidate(res, urls);
  }

  return true;
}

async function runBatchRevalidate(res: NextRevalidate, urls: string[]) {
  return await Promise.all(urls.map(async url => await res.revalidate(url)));
}

export { autoRevalidate, runBatchRevalidate };
