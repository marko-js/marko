const TIMEOUT_MULTIPLIER = 16;

export function wait(timeout: number) {
  return Object.assign(() => resolveAfter(`wait:${timeout}`, timeout), {
    wait: true,
  });
}

export function isWait(value: any): value is ReturnType<typeof wait> {
  return value.wait;
}

export function resolveAfter<T>(value: T, timeout: number) {
  const p = new Promise((resolve) =>
    setTimeout(() => resolve(value), timeout * TIMEOUT_MULTIPLIER)
  ) as Promise<T>;

  return Object.assign(p, { value });
}

export function rejectAfter<T extends Error>(value: T, timeout: number) {
  const p = new Promise((_, reject) =>
    setTimeout(() => reject(value), timeout * TIMEOUT_MULTIPLIER)
  ) as Promise<never>;

  return Object.assign(p, { value });
}
