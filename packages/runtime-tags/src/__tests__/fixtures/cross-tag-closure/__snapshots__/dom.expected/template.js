export const _template = `<!>${_myLet_template}${_myTag_template}<!>`;
export const _walks = /* beginChildWithVar, _myLet_walks, endChild, beginChild, _myTag_walks, endChild */`D0${_myLet_walks}&/${_myTag_walks}&D`;
import { _setup as _myLet, _input_value as _myLet_input_value, _template as _myLet_template, _walks as _myLet_walks } from "./tags/my-let.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup as _myTag, _input_content as _myTag_input_content, _template as _myTag_template, _walks as _myTag_walks } from "./tags/my-tag.marko";
const _count$mytag_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _$.tagVarSignalChange(_scope._["#childScope/0"], count + 1), count;
}));
const _count$mytag_content = /* @__PURE__ */_$.dynamicClosureRead("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$mytag_content_effect(_scope);
});
const _mytag_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get */" D ", 0, 0, _scope => _count$mytag_content(_scope));
const _count_closure = /* @__PURE__ */_$.dynamicClosure(_count$mytag_content);
const _count = _$.registerBoundSignal("__tests__/template.marko_0_count/var", /* @__PURE__ */_$.value("count", _count_closure));
export function _setup(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _count);
  _myLet(_scope["#childScope/0"]);
  _myTag(_scope["#childScope/2"]);
  _myLet_input_value(_scope["#childScope/0"], 0);
  _myTag_input_content(_scope["#childScope/2"], _mytag_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);