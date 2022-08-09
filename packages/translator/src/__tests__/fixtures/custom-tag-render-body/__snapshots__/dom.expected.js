import { setup as _child, attrs as _child_attrs, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { setSource as _setSource, createRenderer as _createRenderer, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _childBody = _createRenderer("This is the body content", "");

const _setup = _scope => {
  _child(_scope[0]);

  _setSource(_scope[0], _child_attrs, {
    name: "World"
  });

  _notifySignal(_scope, _child_attrs);
};

export const template = `${_child_template}`;
export const walks =
/* beginChild(0), _child_walks, endChild */
`/${_child_walks}&`;
export const setup = _setup;
export default _createRenderFn(template, walks, setup);