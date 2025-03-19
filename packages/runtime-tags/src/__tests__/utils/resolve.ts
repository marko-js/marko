const TIMEOUT_MULTIPLIER = 30;
const promisesByResolveTime = new Map<number, Promise<any>>();

export function wait(timeout: number) {
  return Object.assign(() => resolveAfter(`wait:${timeout}`, timeout), {
    wait: true,
  });
}

export function throws(fn: (...args: any[]) => void) {
  return Object.assign(fn, { throws: true });
}

export function isWait(value: any): value is ReturnType<typeof wait> {
  return value?.wait;
}

export function isThrows(value: any): value is ReturnType<typeof throws> {
  return value?.throws;
}

export function resolveAfter<T>(value: T, timeout: number) {
  const promise = getSharedPromise(timeout);
  return Object.assign(
    promise.then(() => value),
    { value },
  );
}

export function rejectAfter<T extends Error>(value: T, timeout: number) {
  const promise = getSharedPromise(timeout);
  return Object.assign(
    promise.then(() => {
      throw value;
    }),
    { value },
  );
}

function getSharedPromise(timeout: number) {
  const resolveTime = roundToNearestTimeBucket(
    Date.now() + timeout * TIMEOUT_MULTIPLIER,
  );
  let resolvePromise = promisesByResolveTime.get(resolveTime);

  if (!resolvePromise) {
    resolvePromise = new Promise<undefined>((resolve) =>
      setTimeout(() => {
        promisesByResolveTime.delete(resolveTime);
        resolve(undefined);
      }, timeout * TIMEOUT_MULTIPLIER),
    );
    promisesByResolveTime.set(resolveTime, resolvePromise);
  }

  return resolvePromise;
}

function roundToNearestTimeBucket(time: number) {
  return Math.round(time / TIMEOUT_MULTIPLIER) * TIMEOUT_MULTIPLIER;
}
