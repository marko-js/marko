export const _template_ = `<!>${_child_template}<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _onClick = _scope => {
  const {
    _: {
      count
    }
  } = _scope;
  return function () {
    _count(_scope._, count + 1);
  };
};
const _count$childBody_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count$childBody = _$.registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber", /* @__PURE__ */_$.dynamicClosure("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _count$childBody_effect(_scope);
}));
const _childBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_count$childBody]));
const _count = /* @__PURE__ */_$.state("count", null, () => _$.dynamicSubscribers("count"));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
  _child_input(_scope["#childScope/0"], {
    renderBody: _childBody(_scope)
  });
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko");