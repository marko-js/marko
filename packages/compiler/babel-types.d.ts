import { Scope } from "./dist/traverse";
export * from "./dist/traverse";
export * from "./dist/types";
export { Scope };
export const MARKO_TYPES: string[];

declare module "./dist/types" {
  interface Program {
    params: Identifier[];
  }
}
