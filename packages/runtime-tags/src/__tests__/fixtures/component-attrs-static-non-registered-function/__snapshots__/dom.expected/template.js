export const $template = `${_price_template}${_price_template}`;
export const $walks = /* beginChild, _price_walks, endChild, beginChild, _price_walks, endChild */`/${_price_walks}&/${_price_walks}&`;
const formatNumber = n => {
  return "$" + n.toFixed(2);
};
function formatNumber2(n) {
  return "$" + n.toFixed(2);
}
import { $setup as _price, $input as _price_input, $template as _price_template, $walks as _price_walks } from "./tags/price.marko";
export function $setup($scope) {
  _price($scope["#childScope/0"]);
  _price_input($scope["#childScope/0"], {
    value: 1,
    format: formatNumber
  });
  _price($scope["#childScope/1"]);
  _price_input($scope["#childScope/1"], {
    value: 1.1111,
    format: formatNumber2
  });
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);