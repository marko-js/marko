import { getFile } from "@marko/compiler/babel-utils";

enum CompileStage {
  parse = "parse",
  migrate = "migrate",
  transform = "transform",
  analyze = "analyze",
  translate = "translate",
}

export function isTranslate() {
  return getCompileStage() === CompileStage.translate;
}

function getCompileStage() {
  return (getFile() as any).___compileStage as CompileStage;
}
