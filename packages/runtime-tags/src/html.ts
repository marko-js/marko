export { toString, escapeScript, escapeStyle, escapeXML } from "./html/content";

export { attr, attrs, classAttr, styleAttr } from "./html/attrs";

export {
  dynamicTagInput,
  dynamicTagArgs,
  createRenderer,
} from "./html/dynamic-tag";

export {
  write,
  fork,
  tryPlaceholder,
  tryCatch,
  nextTagId,
  nextScopeId,
  markResumeNode,
  writeEffect,
  writeScope,
  markResumeScopeStart,
  markResumeControlEnd,
  markResumeControlSingleNodeEnd,
  peekNextScope,
  ensureScopeWithId,
  getScopeById,
  getStreamData,
  register,
} from "./html/writer";

export { createTemplate } from "./html/template";

export { compat } from "./html/compat";
