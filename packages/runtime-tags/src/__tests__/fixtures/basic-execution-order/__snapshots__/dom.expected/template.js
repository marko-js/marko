export const $template = "<button>hide</button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $message_text$if$content = /* @__PURE__ */_$.conditionalClosure("message_text", "#text/1", 0, ($scope, message_text) => _$.data($scope["#text/0"], message_text));
const $setup$if$content = $message_text$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer(" ", /* get, over(1) */" b", $setup$if$content);
const $message = /* @__PURE__ */_$.state("message/2", ($scope, message) => $message_text($scope, message?.text));
const $message_text = /* @__PURE__ */_$.value("message_text", $message_text$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
const $show = /* @__PURE__ */_$.state("show/4", ($scope, show) => $if($scope, show ? 0 : 1));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/0"], "click", function () {
  $message($scope, null);
  $show($scope, false);
}));
export function $setup($scope) {
  $message($scope, {
    text: "hi"
  });
  $show($scope, true);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);