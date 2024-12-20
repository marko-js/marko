export const _template_ = `${_customTag_template}<!>`;
export const _walks_ = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _customTag, _input_content_ as _customTag_input_content, _input_name_ as _customTag_input_name, _template_ as _customTag_template, _walks_ as _customTag_walks } from "./tags/custom-tag.marko";
const _name$customTag_content = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
const _count$customTag_content = /* @__PURE__ */_$.value("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _pattern_$customTag_content = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => {
  _count$customTag_content(_scope, _pattern_.count);
  _name$customTag_content(_scope, _pattern_.name);
});
const _params_2$customTag_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _pattern_$customTag_content(_scope, _params_2?.[0]));
const _customTag_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<div>Count (<!>): <!></div>", /* next(1), over(1), replace, over(2), replace */"Db%c%", void 0, void 0, () => _params_2$customTag_content));
export function _setup_(_scope) {
  _customTag(_scope["#childScope/0"]);
  _customTag_input_content(_scope["#childScope/0"], _customTag_content(_scope));
  _customTag_input_name(_scope["#childScope/0"], "hello");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);