import { data as _data, source as _source, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _id = /* @__PURE__ */_source("id", [], (_scope, id) => _data(_scope["#text/0"], id));
export const attrs = /* @__PURE__ */_destructureSources([_id], (_scope, {
  id
}) => {
  _setSource(_scope, _id, id);
});
export { _id as _apply_id };
export const template = "<div>Id is <!></div>";
export const walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko");