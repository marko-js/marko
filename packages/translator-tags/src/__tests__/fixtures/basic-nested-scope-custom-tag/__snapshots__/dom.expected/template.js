export const _template_ = `<!>${_child_template}<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`;
import { on as _on, data as _data, inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, register as _register, queueEffect as _queueEffect, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, dynamicSubscribers as _dynamicSubscribers, state as _state, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
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
const _count$childBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _count$childBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber", /* @__PURE__ */_dynamicClosure("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count$childBody_effect);
}));
const _childBody = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_count$childBody]));
const _count = /* @__PURE__ */_state("count", null, () => _dynamicSubscribers("count"));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
  _child_input(_scope["#childScope/0"], {
    renderBody: _childBody(_scope)
  });
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko");