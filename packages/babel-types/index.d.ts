import * as types from "./dist/types";
import { Scope } from "./dist/traverse";

declare module "./dist/types" {
  export const MARKO_TYPES: string[];
}

export * from "./dist/traverse";
export * from "./dist/types";
export { types, Scope };
