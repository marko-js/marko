import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _id = /* @__PURE__ */_value("id", (_scope, id) => _data(_scope["#text/0"], id));
const _destructure2 = (_scope, {
  id
}) => {
  _id(_scope, id);
};
const _input = /* @__PURE__ */_value("input", (_scope, input) => _destructure2(_scope, input));
export const _args_ = (_scope, _destructure3, _clean) => {
  let input;
  if (!_clean) [input] = _destructure3;
  _input(_scope, input, _clean);
};
export const _template_ = "<div>Id is <!></div>";
export const _walks_ = /* next(1), over(1), replace, out(1) */"Db%l";
export const _setup_ = function () {};
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_, void 0, void 0, _args_), "packages/translator-tags/src/__tests__/fixtures/dynamic-tag-custom-native/components/child.marko");