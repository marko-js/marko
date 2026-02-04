export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__last = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => _._text($scope["#text/0"], $scope._.last));
const $if_content__setup = $if_content__last;
const $for_content__messages__OR__index__script = _._script("__tests__/template.marko_1_messages_index", $scope => _._on($scope["#button/0"], "click", function () {
  $messages($scope._, $scope._.messages.toSpliced($scope.index, 1));
  $last($scope._, $scope.index);
}));
const $for_content__messages__OR__index = /* @__PURE__ */_._or(5, $for_content__messages__OR__index__script);
const $for_content__messages = /* @__PURE__ */_._for_closure("#div/0", $for_content__messages__OR__index);
const $for_content__setup = $for_content__messages;
const $for_content__index = /* @__PURE__ */_._const("index", $for_content__messages__OR__index);
const $for_content__message = ($scope, message) => _._html($scope, message, "#text/1");
const $for_content__$params = ($scope, $params2) => {
  $for_content__message($scope, $params2[0]);
  $for_content__index($scope, $params2[1]);
};
const $for = /* @__PURE__ */_._for_of("#div/0", "<button> </button>", /* get, next(1), get, out(1) */" D l", $for_content__setup, $for_content__$params);
const $messages = /* @__PURE__ */_._let("messages/2", $scope => {
  $for($scope, [$scope.messages, f => f]);
  $for_content__messages($scope);
});
const $if = /* @__PURE__ */_._if("#text/1", "<div> </div>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $last = /* @__PURE__ */_._let("last/3", $scope => {
  $if($scope, $scope.last !== undefined ? 0 : 1);
  $if_content__last($scope);
});
export function $setup($scope) {
  $messages($scope, ["hello"]);
  $last($scope, undefined);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);