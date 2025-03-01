import { currentProgramPath } from "../visitors/program";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    registerUIDs?: Map<unknown, string>;
  }
}

export function getRegisterState() {
  return (currentProgramPath.node.extra.registerUIDs ??= new Map());
}
