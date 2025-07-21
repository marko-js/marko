export const $template = `${_myButton_template}${_myButton_template}`;
export const $walks = /* beginChild, _myButton_walks, endChild, beginChild, _myButton_walks, endChild */`/${_myButton_walks}&/${_myButton_walks}&`;
import { $setup as _myButton, $value2 as _myButton_input_value, $onClick as _myButton_input_onClick, $template as _myButton_template, $walks as _myButton_walks, $text as _myButton_input_value_text } from "./tags/my-button.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $clickCount = /* @__PURE__ */_$.state("clickCount/2", ($scope, clickCount) => {
  _myButton_input_value($scope["#childScope/0"], {
    text: clickCount
  });
  _myButton_input_onClick($scope["#childScope/0"], $onClick($scope));
  _myButton_input_value_text($scope["#childScope/1"], clickCount);
  _myButton_input_onClick($scope["#childScope/1"], $onClick2($scope));
});
export function $setup($scope) {
  _myButton($scope["#childScope/0"]);
  _myButton($scope["#childScope/1"]);
  $clickCount($scope, 0);
}
function $onClick2($scope, {
  clickCount
} = $scope) {
  return function () {
    $clickCount($scope, ++clickCount)
  };
}
function $onClick($scope, {
  clickCount
} = $scope) {
  return function () {
    $clickCount($scope, ++clickCount)
  };
}
_$.register("__tests__/template.marko_0/onClick2", $onClick2);
_$.register("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);