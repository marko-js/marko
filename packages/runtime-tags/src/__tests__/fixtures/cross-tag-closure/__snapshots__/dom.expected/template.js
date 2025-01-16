export const _template_ = `<!>${_myLet_template}${_myTag_template}<!>`;
export const _walks_ = /* beginChild, _myLet_walks, endChild, beginChild, _myTag_walks, endChild */`D/${_myLet_walks}&/${_myTag_walks}&D`;
import { _setup_ as _myLet, _input_value_ as _myLet_input_value, _template_ as _myLet_template, _walks_ as _myLet_walks } from "./tags/my-let.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _myTag, _input_content_ as _myTag_input_content, _template_ as _myTag_template, _walks_ as _myTag_walks } from "./tags/my-tag.marko";
const _count$myTag_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _$.tagVarSignalChange(_scope._["#childScope/0"], count + 1), count;
}));
const _count$myTag_content = _$.registerSubscriber("__tests__/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$myTag_content_effect(_scope);
}));
const _myTag_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_count$myTag_content]));
const _count = _$.registerBoundSignal("__tests__/template.marko_0_count/var", /* @__PURE__ */_$.value("count", 0, () => _$.dynamicSubscribers("count")));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _count);
  _myLet(_scope["#childScope/0"]);
  _myTag(_scope["#childScope/1"]);
  _myLet_input_value(_scope["#childScope/0"], 0);
  _myTag_input_content(_scope["#childScope/1"], _myTag_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);