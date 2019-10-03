export default function resolveAfter<T>(value: T, timeout: number) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(value), timeout)
  ) as Promise<T>;

  return Object.assign(p, { value });
}
