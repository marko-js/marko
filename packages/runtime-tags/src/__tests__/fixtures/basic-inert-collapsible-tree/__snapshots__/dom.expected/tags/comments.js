export const $template = "<ul></ul>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $template as _comments_template, $walks as _comments_walks } from "./comments.marko";
const $setup$if$content = $scope => {
  $setup($scope["#childScope/0"]);
};
const $expr_comment_comments_id$if$content = /* @__PURE__ */_$.intersection(1, $scope => {
  const {
    _: {
      comment_comments,
      id
    }
  } = $scope;
  $input($scope["#childScope/0"], {
    comments: comment_comments,
    path: id
  });
});
const $comment_comments$if$content = /* @__PURE__ */_$.conditionalClosure("comment_comments", "#text/4", 0, $expr_comment_comments_id$if$content);
const $id$if$content = /* @__PURE__ */_$.conditionalClosure("id", "#text/4", 0, $expr_comment_comments_id$if$content);
const $if_content = /* @__PURE__ */_$.createRenderer(_comments_template, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, $setup$if$content, 0, $scope => {
  $comment_comments$if$content._($scope);
  $id$if$content._($scope);
});
const $id$for$content = /* @__PURE__ */_$.value("id", ($scope, id) => {
  _$.attr($scope["#li/0"], "id", id);
  $id$if$content($scope);
});
const $expr_input_path_i$for$content = /* @__PURE__ */_$.intersection(10, $scope => {
  const {
    _: {
      input_path
    },
    i
  } = $scope;
  $id$for$content($scope, `${input_path || "c"}-${i}`);
});
const $input_path$for$content = /* @__PURE__ */_$.loopClosure("input_path", "#ul/0", $expr_input_path_i$for$content);
const $i$for$content = /* @__PURE__ */_$.value("i", $expr_input_path_i$for$content);
const $open$for$content_effect = _$.effect("__tests__/tags/comments.marko_1_open", ($scope, {
  open
}) => _$.on($scope["#button/2"], "click", function () {
  $open$for$content($scope, !open);
}));
const $open$for$content = /* @__PURE__ */_$.state("open/12", ($scope, open) => {
  _$.attr($scope["#li/0"], "hidden", !open);
  _$.data($scope["#text/3"], open ? "[-]" : "[+]");
  $open$for$content_effect($scope);
});
const $setup$for$content = $scope => {
  $open$for$content($scope, true);
};
const $comment_text$for$content = /* @__PURE__ */_$.value("comment_text", ($scope, comment_text) => _$.data($scope["#text/1"], comment_text));
const $if$for$content = /* @__PURE__ */_$.conditional("#text/4", $if_content);
const $comment_comments$for$content = /* @__PURE__ */_$.value("comment_comments", ($scope, comment_comments) => {
  $if$for$content($scope, comment_comments ? 0 : 1);
  $comment_comments$if$content($scope);
});
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $comment$for$content($scope, $params2[0]);
  $i$for$content($scope, $params2[1]);
});
const $comment$for$content = /* @__PURE__ */_$.value("comment", ($scope, comment) => {
  $comment_text$for$content($scope, comment?.text);
  $comment_comments$for$content($scope, comment?.comments);
});
const $for_content = /* @__PURE__ */_$.createRenderer("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace */" E l D l%", $setup$for$content, $params2$for$content, $input_path$for$content);
const $for = /* @__PURE__ */_$.loopOf("#ul/0", $for_content);
export const $input_comments = /* @__PURE__ */_$.value("input_comments", ($scope, input_comments) => $for($scope, [input_comments]));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_comments($scope, input.comments);
  $input_path($scope, input.path);
});
export const $input_path = /* @__PURE__ */_$.value("input_path", $input_path$for$content);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/comments.marko", $template, $walks, $setup, $input);