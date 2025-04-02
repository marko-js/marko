export const _template = `<!>${_child_template}<!>`;
export const _walks = /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup as _child, _input_content as _child_input_content, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
const _count$child_content_effect = _$.effect("__tests__/template.marko_1_count", (_scope, {
  _: {
    count
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _count(_scope._, count + 1), count;
}));
const _count$child_content = /* @__PURE__ */_$.dynamicClosureRead("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$child_content_effect(_scope);
});
const _child_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<button> </button>", /* get, next(1), get */" D ", 0, 0, _scope => _count$child_content(_scope));
const _count_closure = /* @__PURE__ */_$.dynamicClosure(_count$child_content);
const _count = /* @__PURE__ */_$.state("count/1", _scope => _count_closure(_scope));
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
  _child_input_content(_scope["#childScope/0"], _child_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);