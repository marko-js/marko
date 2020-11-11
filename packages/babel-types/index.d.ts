import * as types from "./dist/types";

declare module "./dist/types" {
  export const MARKO_TYPES: string[];
}

export type * from "./dist/traverse";
export type * from "./dist/types";
export { types };
