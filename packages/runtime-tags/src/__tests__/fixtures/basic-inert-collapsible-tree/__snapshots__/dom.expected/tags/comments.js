export const $template = "<ul></ul>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__comment_comments = /* @__PURE__ */_._if_closure("#text/4", 0, $scope => $input_comments($scope["#childScope/0"], $scope._.comment_comments));
const $if_content__setup = $scope => {
  $if_content__comment_comments._($scope);
  $if_content__id._($scope);
  $setup($scope["#childScope/0"]);
};
const $if_content__id = /* @__PURE__ */_._if_closure("#text/4", 0, $scope => $input_path($scope["#childScope/0"], $scope._.id));
const $for_content__id = /* @__PURE__ */_._const("id", $scope => {
  _._attr($scope["#li/0"], "id", $scope.id);
  $if_content__id($scope);
});
const $for_content__input_path = /* @__PURE__ */_._for_closure("#ul/0", $scope => $for_content__id($scope, `${$scope._.input_path || "c"}-${$scope["#LoopKey"]}`));
const $for_content__open__script = _._script("__tests__/tags/comments.marko_1_open", $scope => _._on($scope["#button/2"], "click", function () {
  $for_content__open($scope, !$scope.open);
}));
const $for_content__open = /* @__PURE__ */_._let("open/12", $scope => {
  _._attr($scope["#li/0"], "hidden", !$scope.open);
  _._text($scope["#text/3"], $scope.open ? "[-]" : "[+]");
  $for_content__open__script($scope);
});
const $for_content__setup = $scope => {
  $for_content__input_path._($scope);
  $for_content__open($scope, true);
};
const $for_content__comment_text = ($scope, comment_text) => _._text($scope["#text/1"], comment_text);
const $for_content__if = /* @__PURE__ */_._if("#text/4", $template, /* <comments> */`/${$walks}&`, $if_content__setup);
const $for_content__comment_comments = /* @__PURE__ */_._const("comment_comments", $scope => {
  $for_content__if($scope, $scope.comment_comments ? 0 : 1);
  $if_content__comment_comments($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__comment($scope, $params2[0]);
const $for_content__comment = ($scope, comment) => {
  $for_content__comment_text($scope, comment?.text);
  $for_content__comment_comments($scope, comment?.comments);
};
const $for = /* @__PURE__ */_._for_of("#ul/0", "<li><span> </span><button> </button><!></li>", /* get, next(2), get, out(1), get, next(1), get, out(1), replace, out(1) */" E l D l%l", $for_content__setup, $for_content__$params);
export const $input_comments = ($scope, input_comments) => $for($scope, [input_comments]);
export const $input_path = /* @__PURE__ */_._const("input_path", $for_content__input_path);
export const $input = ($scope, input) => {
  $input_comments($scope, input.comments);
  $input_path($scope, input.path);
};
export default /* @__PURE__ */_._template("__tests__/tags/comments.marko", $template, $walks, $setup, $input);