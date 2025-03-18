export const _template_ = "a<!>b";
export const _walks_ = /* over(1), replace, over(2) */"b%c";
import { rejectAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _await_content = /* @__PURE__ */_$.createRenderer("failed");
const _await = /* @__PURE__ */_$.awaitTag("#text/0", _await_content);
export function _setup_(_scope) {
  _await(_scope, rejectAfter(new Error("ERROR!"), 1));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);