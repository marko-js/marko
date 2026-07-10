const globals = globalThis as { __comptimeSharedLoads?: number };

export const load = (globals.__comptimeSharedLoads =
  (globals.__comptimeSharedLoads ?? 0) + 1);

export function describeLoad(prefix: string) {
  return `${prefix}#${load}`;
}
