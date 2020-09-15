export function createPool<T>(create: () => T) {
  const pool = ([] as any) as T[] & { get: () => T };
  pool.get = () => pool.pop() || create();
  return pool;
}
