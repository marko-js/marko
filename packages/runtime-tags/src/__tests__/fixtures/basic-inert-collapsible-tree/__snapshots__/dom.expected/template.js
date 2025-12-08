export const $template = _comments_template;
export const $walks = /* <comments> */`/${_comments_walks}&`;
import { $setup as _comments, $input_comments as _comments_input_comments, $input_path as _comments_input_path, $template as _comments_template, $walks as _comments_walks } from "./tags/comments.marko";
export function $setup($scope) {
  _comments($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_comments = /* @__PURE__ */_._const("input_comments", $scope => _comments_input_comments($scope["#childScope/0"], $scope.input_comments));
export const $input_path = /* @__PURE__ */_._const("input_path", $scope => _comments_input_path($scope["#childScope/0"], $scope.input_path));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_comments($scope, $scope.input.comments);
  $input_path($scope, $scope.input.path);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);