const TIMEOUT_MULTIPLIER = 50;
const promisesByResolveTime = new Map<number, Promise<any>>();

export function wait(timeout: number) {
  return Object.assign(() => resolveAfter(`wait:${timeout}`, timeout), {
    wait: true,
  });
}

export const flush = Object.assign(() => {}, {
  flush: true,
});

export function throws(fn: (...args: any[]) => void) {
  return Object.assign(fn, { throws: true });
}

export function isWait(value: any): value is ReturnType<typeof wait> {
  return typeof value === "function" && value.wait;
}

export function isFlush(value: any): value is ReturnType<typeof flush> {
  return typeof value === "function" && value.flush;
}

export function isThrows(value: any): value is ReturnType<typeof throws> {
  return typeof value === "function" && value.throws;
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
