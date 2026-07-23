import { getFile } from "@marko/compiler/babel-utils";

import * as CompileStage from "./constants/compile-stage";

type CompileStage = CompileStage.Value;

export function isTranslate() {
  return getCompileStage() === CompileStage.translate;
}

function getCompileStage() {
  return (getFile() as any).___compileStage as CompileStage;
}
