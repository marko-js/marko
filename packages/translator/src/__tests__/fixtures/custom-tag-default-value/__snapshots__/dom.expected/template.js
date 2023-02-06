import { setSource as _setSource, inChild as _inChild, source as _source, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _child, attrs as _child_attrs, template as _child_template, walks as _child_walks } from "./components/child.marko";
const _child_attrs_inChild = _inChild(_child_attrs, "#childScope/0");
const _x = /* @__PURE__ */_source("x", [_inChild(_child_attrs, "#childScope/1")], (_scope, x) => _setSource(_scope["#childScope/1"], _child_attrs, {
  value: x
}));
const _setup = _scope => {
  _setSource(_scope, _x, "y");
  _child(_scope["#childScope/0"]);
  _setSource(_scope["#childScope/0"], _child_attrs, {
    value: 3
  });
  _child(_scope["#childScope/1"]);
  _notifySignal(_scope, _child_attrs_inChild);
};
export const template = `${_child_template}${_child_template}`;
export const walks = /* beginChild, _child_walks, endChild, beginChild, _child_walks, endChild */`/${_child_walks}&/${_child_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/custom-tag-default-value/template.marko");