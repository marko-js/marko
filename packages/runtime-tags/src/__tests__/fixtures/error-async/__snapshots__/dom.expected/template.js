export const _template = "a<!>b";
export const _walks = /* over(1), replace, over(2) */"b%c";
import { rejectAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _await_content = /* @__PURE__ */_$.createRenderer("failed");
const _await = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
export function _setup(_scope) {
  _await(_scope, rejectAfter(new Error("ERROR!"), 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);