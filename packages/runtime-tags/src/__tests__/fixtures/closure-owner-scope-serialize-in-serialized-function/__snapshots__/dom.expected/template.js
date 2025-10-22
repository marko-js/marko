export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__run__script = _._script("__tests__/template.marko_1_run", ({
  run
}) => run());
const $if_content__run = /* @__PURE__ */_._const("run", $if_content__run__script);
const $if_content__text = /* @__PURE__ */_._if_closure("text", "#text/0", 0, ($scope, text) => $if_content__run($scope, $run($scope)));
const $if_content__setup = $if_content__text;
const $if_content = /* @__PURE__ */_._content_branch("<div></div>", /* get, over(1) */" b", $if_content__setup);
const $text2 = /* @__PURE__ */_._const("text");
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export function $setup($scope) {
  $text2($scope, $text);
  $if($scope, 1 ? 0 : 1);
}
function $run($scope, {
  _: {
    text
  }
} = $scope) {
  return function () {
    _._el_read($scope["#div/0"]).innerHTML = text();
  };
}
function $text() {
  return "HI";
}
_._resume("__tests__/template.marko_1/run", $run);
_._resume("__tests__/template.marko_0/text", $text);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);