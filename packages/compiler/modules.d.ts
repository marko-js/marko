export const cwd: string;
export const root: string;
export const pkg: null | Record<string, unknown>;
export const require: (id: string) => unknown;
export const resolve: (id: string, from: string) => string;
export const tryResolve: (id: string, from: string) => string | undefined;
export const getRootPackage: (
  dir: string,
  fileSystem: Pick<typeof import("fs"), "readFileSync">,
) => null | (Record<string, unknown> & { __dirname: string });
