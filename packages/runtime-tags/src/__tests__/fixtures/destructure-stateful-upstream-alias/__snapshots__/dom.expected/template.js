export const $template = `${_store_template}<button>Clear</button><ul></ul>`;
export const $walks = /* <store/var>, get, over(1), get, over(1) */`0${_store_walks}& b b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _store, $input_value as _store_input_value, $template as _store_template, $walks as _store_walks } from "./tags/store.marko";
const $for_content__item = ($scope, item) => _._text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $store = _._var_resume("__tests__/template.marko_0_store/var", ($scope, store) => {
  $list($scope, store.list);
  $clear($scope, store.clear);
});
const $for = /* @__PURE__ */_._for_of("#ul/3", "<li> </li>", /* next(1), get, out(1) */"D l", 0, $for_content__$params);
const $list = ($scope, list) => $for($scope, [list]);
const $clear__script = _._script("__tests__/template.marko_0_clear", $scope => _._on($scope["#button/2"], "click", $scope.clear));
const $clear = /* @__PURE__ */_._const("clear", $clear__script);
export function $setup($scope) {
  _._var($scope, "#childScope/0", $store);
  _store($scope["#childScope/0"]);
  _store_input_value($scope["#childScope/0"], ["Learn Marko", "Make a Website"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);