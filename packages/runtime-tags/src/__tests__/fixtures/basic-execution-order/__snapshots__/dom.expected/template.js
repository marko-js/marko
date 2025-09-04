export const $template = "<button>hide</button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__message_text = /* @__PURE__ */_._if_closure("message_text", "#text/1", 0, ($scope, message_text) => _._text($scope["#text/0"], message_text));
const $if_content__setup = $if_content__message_text;
const $if_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", $if_content__setup);
const $message = /* @__PURE__ */_._let("message/2", ($scope, message) => $message_text($scope, message?.text));
const $message_text = /* @__PURE__ */_._const("message_text", $if_content__message_text);
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
const $show = /* @__PURE__ */_._let("show/4", ($scope, show) => $if($scope, show ? 0 : 1));
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", function () {
  $message($scope, null);
  $show($scope, false);
}));
export function $setup($scope) {
  $message($scope, {
    text: "hi"
  });
  $show($scope, true);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);