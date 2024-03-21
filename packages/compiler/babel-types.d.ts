/* eslint-disable import/export, import/no-unresolved */
import { Scope } from "./dist/traverse";
export * from "./dist/types";
export * from "./dist/traverse";
export { Scope };
export const MARKO_TYPES: string[];

declare module "./dist/types" {
  interface Program {
    params: Identifier[];
  }
}
