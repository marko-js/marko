import * as types from "./dist/types";

declare module "./dist/types" {
  export const MARKO_TYPES: string[];
}

export * from "./dist/traverse";
export { types };
