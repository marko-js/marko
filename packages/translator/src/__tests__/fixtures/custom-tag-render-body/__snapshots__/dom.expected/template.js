import { setup as _child, attrs as _child_attrs, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { bindRenderer as _bindRenderer, inChild as _inChild, setSource as _setSource, createRenderer as _createRenderer, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _child_attrs_inChild = _inChild(_child_attrs, "#childScope/0");
const _childBody = /* @__PURE__ */_createRenderer("This is the body content", "");
const _setup = _scope => {
  _child(_scope["#childScope/0"]);
  _setSource(_scope["#childScope/0"], _child_attrs, {
    name: "World",
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _childBody)
  });
  _notifySignal(_scope, _child_attrs_inChild);
};
export const template = `${_child_template}`;
export const walks = /* beginChild, _child_walks, endChild */`/${_child_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);