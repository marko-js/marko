export const $template = `${_store_template}<button>Clear</button><ul></ul>`;
export const $walks = /* <store/var>, get, over(1), get, over(1) */`0${_store_walks}& b b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _store, $input_value as _store_input_value, $template as _store_template, $walks as _store_walks } from "./tags/store.marko";
const $for_content__item = /* @__PURE__ */_._const("item", $scope => _._text($scope["#text/0"], $scope.item));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__item($scope, $scope.$params2[0]));
const $store = _._var_resume("__tests__/template.marko_0_store/var", /* @__PURE__ */_._const("store", $scope => {
  $store_list($scope, $scope.store?.list);
  $store_listChange($scope, $scope.store?.listChange);
  $store_clear($scope, $scope.store?.clear);
}));
const $for = /* @__PURE__ */_._for_of("#ul/3", "<li> </li>", /* next(1), get, out(1) */"D l", 0, $for_content__$params);
const $list = /* @__PURE__ */_._let("list/9", $scope => $for($scope, [$scope.list]));
const $store_list__OR__store_listChange = /* @__PURE__ */_._or(7, $scope => $list($scope, $scope.store_list, $scope.store_listChange), 1, "#scopeOffset/1");
const $store_list = /* @__PURE__ */_._const("store_list", $store_list__OR__store_listChange);
const $store_listChange = /* @__PURE__ */_._const("store_listChange", $store_list__OR__store_listChange);
const $store_clear__script = _._script("__tests__/template.marko_0_store_clear", $scope => _._on($scope["#button/2"], "click", $scope.store_clear));
const $store_clear = /* @__PURE__ */_._const("store_clear", $store_clear__script);
export function $setup($scope) {
  _._var($scope, "#childScope/0", $store);
  _store($scope["#childScope/0"]);
  _store_input_value($scope["#childScope/0"], ["Learn Marko", "Make a Website"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);