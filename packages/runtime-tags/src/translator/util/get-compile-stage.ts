import { getFile } from "@marko/compiler/babel-utils";

export enum CompileStage {
  parse = "parse",
  migrate = "migrate",
  transform = "transform",
  analyze = "analyze",
  translate = "translate",
}
export function getCompileStage() {
  return (getFile() as any).___compileStage as CompileStage;
}

export function isTranslate() {
  return getCompileStage() === CompileStage.translate;
}
