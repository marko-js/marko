import type { types as t } from "@marko/compiler";

declare module "@marko/compiler" {
  export interface MarkoMeta {
    /**
     * Relative import paths of a template's known client side assets (eg css).
     * Collected during analyze so the page entry builder can link them in for
     * otherwise server only templates.
     */
    assetImports?: Set<string>;
  }
}

export function addAssetImport(file: t.BabelFile, request: string) {
  (file.metadata.marko.assetImports ??= new Set()).add(request);
}

export function isClientAssetImport(file: t.BabelFile, request: string) {
  const { hydrateIncludeImports } = file.markoOpts;
  return typeof hydrateIncludeImports === "function"
    ? hydrateIncludeImports(request)
    : !!hydrateIncludeImports?.test(request);
}
