import { Quote } from './quote';

describe('Quote', () => {
  it('should create an instance', () => {
    expect(new Quote(0,'','','')).toBeTruthy();
  });
});
