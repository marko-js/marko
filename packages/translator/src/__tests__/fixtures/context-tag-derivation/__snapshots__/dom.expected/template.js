import { dynamicSubscribers as _dynamicSubscribers, initContextProvider as _initContextProvider, inChildMany as _inChildMany, createRenderer as _createRenderer, derivation as _derivation, notifySignal as _notifySignal, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _child, template as _child_template, walks as _child_walks, closures as _child_closures } from "./components/child.marko";
const _setup$putBody = _scope => {
  _child(_scope[0]);
};
const _putBody = /* @__PURE__ */_createRenderer(`${_child_template}`, /* beginChild(0), _child_walks, endChild */`/${_child_walks}&`, _setup$putBody, [_inChildMany(_child_closures, 0)]);
const _put = /* @__PURE__ */_derivation(1, 1, [_dynamicSubscribers(1)], _scope => 123);
const _setup = _scope => {
  _initContextProvider(_scope, 0, 1, "packages/translator/src/__tests__/fixtures/context-tag-derivation/template.marko", _putBody);
  _notifySignal(_scope, _put);
};
export const template = "<!>";
export const walks = /* replace, skip(1), over(1) */"%)b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup);