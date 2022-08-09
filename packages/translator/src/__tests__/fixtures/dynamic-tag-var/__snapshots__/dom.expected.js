import child from "./components/child/index.marko";

const data1 = _dynamicTag(_scope, child, null);

const _tagName = show && child;

const data2 = _dynamicTag(_scope, _tagName, null);

const data3 = _dynamicTag(_scope, dynamic, null);

const _tagName2 = show && "div";

const el1 = _dynamicTag(_scope, _tagName2, null);

import { dynamicTag as _dynamicTag, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _dynamic = _source(4, []);

const _show = _source(3, []);

export const attrs = _destructureSources([_show, _dynamic], (_scope, {
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
export default _createRenderFn(template, walks, setup, attrs);