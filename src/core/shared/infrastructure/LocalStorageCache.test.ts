import { LocalStorageCache } from './LocalStorageCache';

describe('LocalStorageCache', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should store and retrieve a value', () => {
    LocalStorageCache.set('test-key', { foo: 'bar' });
    const result = LocalStorageCache.get('test-key');
    expect(result).toEqual({ foo: 'bar' });
  });

  it('should return null if key does not exist', () => {
    const result = LocalStorageCache.get('non-existent');
    expect(result).toBeNull();
  });

  it('should return null if item is expired', () => {
    LocalStorageCache.set('test-key', { foo: 'bar' });

    // Advance time by 1 hour + 1ms
    jest.advanceTimersByTime(3600 * 1000 + 1);

    const result = LocalStorageCache.get('test-key');
    expect(result).toBeNull();
  });

  it('should return value if item is not expired', () => {
    LocalStorageCache.set('test-key', { foo: 'bar' });

    // Advance time by 59 minutes
    jest.advanceTimersByTime(59 * 60 * 1000);

    const result = LocalStorageCache.get('test-key');
    expect(result).toEqual({ foo: 'bar' });
  });
});
