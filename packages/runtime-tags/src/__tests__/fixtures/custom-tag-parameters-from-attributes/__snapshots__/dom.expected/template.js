export const _template = `${_customTag_template}<!>`;
export const _walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup as _customTag, _input_content as _customTag_input_content, _input_name as _customTag_input_name, _template as _customTag_template, _walks as _customTag_walks } from "./tags/custom-tag.marko";
const _name$customtag_content = /* @__PURE__ */_$.value("name", (_scope, name) => _$.data(_scope["#text/0"], name));
const _count$customtag_content = /* @__PURE__ */_$.value("count", (_scope, count) => _$.data(_scope["#text/1"], count));
const _temp$customtag_content = /* @__PURE__ */_$.value("_temp", (_scope, _temp) => {
  _count$customtag_content(_scope, _temp.count);
  _name$customtag_content(_scope, _temp.name);
});
const _params2$customtag_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _temp$customtag_content(_scope, _params2?.[0]));
const _customtag_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div>Count (<!>): <!></div>", /* next(1), over(1), replace, over(2), replace */"Db%c%", 0, _params2$customtag_content);
export function _setup(_scope) {
  _customTag(_scope["#childScope/0"]);
  _customTag_input_content(_scope["#childScope/0"], _customtag_content(_scope));
  _customTag_input_name(_scope["#childScope/0"], "hello");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);