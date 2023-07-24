import { initContextProvider as _initContextProvider, childClosures as _childClosures, createRenderer as _createRenderer, dynamicSubscribers as _dynamicSubscribers, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
import { setup as _child, template as _child_template, walks as _child_walks, closures as _child_closures } from "./components/child.marko";
const _setup$putBody = _scope => {
  _child(_scope["#childScope/0"]);
};
const _putBody = /* @__PURE__ */_createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$putBody, [_childClosures(_child_closures, "#childScope/0")]);
const _put = /* @__PURE__ */_value("0:", null, _dynamicSubscribers("0:"));
const _setup = _scope => {
  _initContextProvider(_scope, "#text/0", "0:", "packages/translator/src/__tests__/fixtures/context-tag-static/template.marko", _putBody);
  _put(_scope, 123);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, void 0, void 0, "packages/translator/src/__tests__/fixtures/context-tag-static/template.marko");