import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _id = /* @__PURE__ */_value("id", (_scope, id) => _data(_scope["#text/0"], id));
export const attrs = (_scope, _destructure, _clean) => {
  let id;
  if (!_clean) ({
    id
  } = _destructure);
  _id(_scope, id, _clean);
};
export { _id };
export const template = "<div>Id is <!></div>";
export const walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const setup = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, void 0, void 0, void 0, attrs), "packages/translator/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko");