import { setup as _comments, args as _comments_args, template as _comments_template, walks as _comments_walks } from "./components/comments.marko";
import { inChild as _inChild, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _input = /* @__PURE__ */_value("input", (_scope, input) => _comments_args(_scope["#childScope/0"], [input]), void 0, _inChild("#childScope/0", _comments_args));
const _setup = _scope => {
  _comments(_scope["#childScope/0"]);
};
export const args = (_scope, _destructure, _clean) => {
  let input;
  if (!_clean) [input] = _destructure;
  _input(_scope, input, _clean);
};
export { _input };
export const template = `${_comments_template}`;
export const walks = /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, void 0, void 0, args), "packages/translator-tags/src/__tests__/fixtures/basic-inert-collapsible-tree/template.marko");