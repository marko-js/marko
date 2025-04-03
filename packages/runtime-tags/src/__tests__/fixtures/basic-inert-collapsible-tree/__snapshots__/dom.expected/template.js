export const $template = _comments_template;
export const $walks = /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`;
import { $setup as _comments, $input_comments as _comments_input_comments, $input_path as _comments_input_path, $template as _comments_template, $walks as _comments_walks } from "./tags/comments.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  const $comments_input_spread = input;
  _comments_input_comments($scope["#childScope/0"], $comments_input_spread.comments);
  _comments_input_path($scope["#childScope/0"], $comments_input_spread.path);
});
export function $setup($scope) {
  _comments($scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);