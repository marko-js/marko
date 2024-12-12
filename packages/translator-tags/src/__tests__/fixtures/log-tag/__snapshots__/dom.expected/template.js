export const _template_ = "<!>";
export const _walks_ = /* replace, over(1) */"%b";
import testLog from "./test-log";
const staticVar = "static var";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _output = /* @__PURE__ */_$.state("output", (_scope, output) => _$.data(_scope["#text/0"], output));
const _tagVar = /* @__PURE__ */_$.value("tagVar", (_scope, tagVar) => console.log(tagVar));
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _output(_scope, JSON.stringify(testLog)));
export function _setup_(_scope) {
  console.log("identifier");
  console.log(staticVar);
  _setup__effect(_scope);
  _tagVar(_scope, "tag var");
  _output(_scope, JSON.stringify(testLog));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);