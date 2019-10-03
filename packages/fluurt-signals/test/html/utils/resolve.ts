export function resolveAfter<T>(value: T, timeout: number) {
  const p = new Promise(resolve =>
    setTimeout(() => resolve(value), timeout)
  ) as Promise<T>;

  return Object.assign(p, { value });
}

export function rejectAfter<T extends Error>(value: T, timeout: number) {
  const p = new Promise((_, reject) =>
    setTimeout(() => reject(value), timeout)
  ) as Promise<never>;

  return Object.assign(p, { value });
}
