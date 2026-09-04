import type { types as t } from "@marko/compiler";
import { getFile } from "@marko/compiler/babel-utils";

import * as CompileStage from "./constants/compile-stage";

type CompileStage = CompileStage.Value;

export function isTranslate() {
  return getCompileStage() === CompileStage.translate;
}

export function isAnalyzing(file: t.BabelFile) {
  return getCompileStage(file) === CompileStage.analyze;
}

function getCompileStage(file = getFile()) {
  return (file as any).___compileStage as CompileStage;
}
