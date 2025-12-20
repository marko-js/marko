export const $template = _comments_template;
export const $walks = /* <comments> */`/${_comments_walks}&`;
import { $setup as _comments, $input_comments as _comments_input_comments, $input_path as _comments_input_path, $template as _comments_template, $walks as _comments_walks } from "./tags/comments.marko";
export function $setup($scope) {
  _comments($scope["#childScope/0"]);
}
export const $input_comments = ($scope, input_comments) => _comments_input_comments($scope["#childScope/0"], input_comments);
export const $input_path = ($scope, input_path) => _comments_input_path($scope["#childScope/0"], input_path);
export const $input = ($scope, input) => {
  $input_comments($scope, input.comments);
  $input_path($scope, input.path);
};
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);