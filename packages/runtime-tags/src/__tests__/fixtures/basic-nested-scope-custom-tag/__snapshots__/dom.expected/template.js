export const _template_ = `<!>${_child_template}<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _input_content_ as _child_input_content, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
const _count$child_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    "count/1": count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$child_content = _$.registerDynamicClosure("__tests__/template.marko_1_count/subscriber", "count/1", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$child_content_effect(_scope);
});
const _setup$child_content = _scope => {
  _count$child_content._(_scope);
};
const _child_content = _$.registerContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get */" D ", _setup$child_content);
const _count = /* @__PURE__ */_$.state("count/1", (_scope, count) => _count$child_content(_scope));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
  _child_input_content(_scope["#childScope/0"], _child_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);