export const _template = _comments_template;
export const _walks = /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`;
import { _setup as _comments, _input_comments as _comments_input_comments, _input_path as _comments_input_path, _template as _comments_template, _walks as _comments_walks } from "./tags/comments.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  const _comments_input_spread = input;
  _comments_input_comments(_scope["#childScope/0"], _comments_input_spread.comments);
  _comments_input_path(_scope["#childScope/0"], _comments_input_spread.path);
});
export function _setup(_scope) {
  _comments(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);