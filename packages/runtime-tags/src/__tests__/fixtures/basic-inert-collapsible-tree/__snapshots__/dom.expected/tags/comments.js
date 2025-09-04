export const $template = "<ul></ul>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
import { $template as _comments_template, $walks as _comments_walks } from "./comments.marko";
const $if_content__setup = $scope => {
  $setup($scope["#childScope/0"]);
  $if_content__comment_comments._($scope);
  $if_content__id._($scope);
};
const $if_content__comment_comments__OR__id = /* @__PURE__ */_._or(1, $scope => {
  let {
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
const $if_content__comment_comments = /* @__PURE__ */_._if_closure("comment_comments", "#text/4", 0, $if_content__comment_comments__OR__id);
const $if_content__id = /* @__PURE__ */_._if_closure("id", "#text/4", 0, $if_content__comment_comments__OR__id);
const $if_content = /* @__PURE__ */_._content_branch(_comments_template, /* beginChild, _comments_walks, endChild */`/${_comments_walks}&`, $if_content__setup);
const $for_content__id = /* @__PURE__ */_._const("id", ($scope, id) => {
  _._attr($scope["#li/0"], "id", id);
  $if_content__id($scope);
});
const $for_content__input_path__OR__i = /* @__PURE__ */_._or(10, $scope => {
  let {
    _: {
      input_path
    },
    i
  } = $scope;
  $for_content__id($scope, `${input_path || "c"}-${i}`);
});
const $for_content__input_path = /* @__PURE__ */_._for_closure("input_path", "#ul/0", $for_content__input_path__OR__i);
const $for_content__i = /* @__PURE__ */_._const("i", $for_content__input_path__OR__i);
const $for_content__open__script = _._script("__tests__/tags/comments.marko_1_open", ($scope, {
  open
}) => _._on($scope["#button/2"], "click", function () {
  $for_content__open($scope, open = !open);
}));
const $for_content__open = /* @__PURE__ */_._let("open/12", ($scope, open) => {
  _._attr($scope["#li/0"], "hidden", !open);
  _._text($scope["#text/3"], open ? "[-]" : "[+]");
  $for_content__open__script($scope);
});
const $for_content__setup = $scope => {
  $for_content__input_path._($scope);
  $for_content__open($scope, true);
};
const $for_content__comment_text = /* @__PURE__ */_._const("comment_text", ($scope, comment_text) => _._text($scope["#text/1"], comment_text));
const $for_content__if = /* @__PURE__ */_._if("#text/4", $if_content);
const $for_content__comment_comments = /* @__PURE__ */_._const("comment_comments", ($scope, comment_comments) => {
  $for_content__if($scope, comment_comments ? 0 : 1);
  $if_content__comment_comments($scope);
});
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => {
  $for_content__comment($scope, $params2[0]);
  $for_content__i($scope, $params2[1]);
});
const $for_content__comment = /* @__PURE__ */_._const("comment", ($scope, comment) => {
  $for_content__comment_text($scope, comment?.text);
  $for_content__comment_comments($scope, comment?.comments);
});
const $for_content = /* @__PURE__ */_._content_branch("<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace, out(1) */" E l D l%l", $for_content__setup, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#ul/0", $for_content);
export const $input_comments = /* @__PURE__ */_._const("input_comments", ($scope, input_comments) => $for($scope, [input_comments]));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_comments($scope, input.comments);
  $input_path($scope, input.path);
});
export const $input_path = /* @__PURE__ */_._const("input_path", $for_content__input_path);
export default /* @__PURE__ */_._template("__tests__/tags/comments.marko", $template, $walks, $setup, $input);