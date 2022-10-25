import child from "./components/child/index.marko";

const _tagName = show && child;

const _tagName2 = show && "div";

import { source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _dynamic = /* @__PURE__ */_source(1, []);

const _show = /* @__PURE__ */_source(0, []);

export const attrs = /* @__PURE__ */_destructureSources([_show, _dynamic], (_scope, {
  show,
  dynamic
}) => {
  _setSource(_scope, _show, show);

  _setSource(_scope, _dynamic, dynamic);
});
export { _show as _apply_show, _dynamic as _apply_dynamic };
export const template = "";
export const walks = "";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);