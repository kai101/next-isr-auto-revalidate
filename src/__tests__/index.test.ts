import { runBatchRevalidate } from '../index';

describe('runBatchRevalidate', () => {
  it('works', async () => {
    const res = { revalidate: (_: string) => ({}) };
    const revalidateSpy = jest.spyOn(res, 'revalidate');
    await runBatchRevalidate(res, ['post/1', 'post/2']);
    expect(revalidateSpy).toHaveBeenCalledWith('post/1');
    expect(revalidateSpy).toHaveBeenCalledWith('post/2');
  });
});
