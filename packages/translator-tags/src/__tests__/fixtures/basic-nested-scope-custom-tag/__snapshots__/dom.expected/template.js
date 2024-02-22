import { on as _on, queueSource as _queueSource, data as _data, bindRenderer as _bindRenderer, inChild as _inChild, register as _register, queueEffect as _queueEffect, dynamicClosure as _dynamicClosure, registerSubscriber as _registerSubscriber, createRenderer as _createRenderer, dynamicSubscribers as _dynamicSubscribers, value as _value, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
import { setup as _child, args as _child_args, template as _child_template, walks as _child_walks } from "./components/child.marko";
const _count$childBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    _: {
      count
    }
  } = _scope;
  _queueSource(_scope._, _count, count + 1);
}));
const _count$childBody = _registerSubscriber("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko_1_count/subscriber", /* @__PURE__ */_dynamicClosure("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _queueEffect(_scope, _count$childBody_effect);
}));
const _childBody = /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, [_count$childBody]);
const _count = /* @__PURE__ */_value("count", null, _dynamicSubscribers("count"));
const _setup = _scope => {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
  _child_args(_scope["#childScope/0"], [{
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _childBody)
  }]);
};
export const template = `<!>${_child_template}<!>`;
export const walks = /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-custom-tag/template.marko");