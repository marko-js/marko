import { setup as _comments, attrs as _comments_attrs, template as _comments_template, walks as _comments_walks } from "./components/comments.marko";
import { value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input, _dirty) => {
  let _comments_attrs_value;
  if (_dirty) {
    _comments_attrs_value = input;
  }
  _comments_attrs(_scope["#childScope/0"], _comments_attrs_value, _dirty);
});
const _setup = _scope => {
  _comments(_scope["#childScope/0"]);
};
export const attrs = _input;
export { _input };
export const template = `${_comments_template}`;
export const walks = /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/basic-inert-collapsible-tree/template.marko");