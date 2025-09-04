export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
_._enable_catch();
_._enable_catch();
_._enable_catch();
const $await_content4__value = /* @__PURE__ */_._const("value", ($scope, value) => _._attr_class($scope["#div/0"], value));
const $await_content4__$params = /* @__PURE__ */_._const("$params5", ($scope, $params5) => $await_content4__value($scope, $params5[0]));
const $await_content4 = /* @__PURE__ */_._content_branch("<div level=4></div>", /* get, over(1) */" b", 0, $await_content4__$params);
const $placeholder_content4 = _._content_resume("__tests__/template.marko_11_content", "LOADING B2", /* over(1) */"b");
const $placeholder_content3 = _._content_resume("__tests__/template.marko_10_content", "LOADING B1", /* over(1) */"b");
const $try_content4__await = /* @__PURE__ */_._await("#text/0", $await_content4);
const $try_content4__promiseB = /* @__PURE__ */_._closure_get("promiseB", $try_content4__await, $scope => $scope._._._);
const $try_content4__setup = $try_content4__promiseB;
const $try_content4 = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content4__setup);
const $await_content3__value = /* @__PURE__ */_._const("value", ($scope, value) => _._attr_class($scope["#div/0"], value));
const $await_content3__try = /* @__PURE__ */_._try("#text/1", $try_content4);
const $await_content3__setup = $scope => {
  $await_content3__try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content4($scope)
    })
  });
};
const $await_content3__$params = /* @__PURE__ */_._const("$params4", ($scope, $params4) => $await_content3__value($scope, $params4[0]));
const $await_content3 = /* @__PURE__ */_._content_branch("<div level=3><!></div>", /* get, next(1), replace, out(1) */" D%l", $await_content3__setup, $await_content3__$params);
const $try_content3__await = /* @__PURE__ */_._await("#text/0", $await_content3);
const $try_content3__promiseB = /* @__PURE__ */_._closure_get("promiseB", $try_content3__await);
const $try_content3__setup = $try_content3__promiseB;
const $try_content3 = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content3__setup);
const $await_content2__value = /* @__PURE__ */_._const("value", ($scope, value) => _._attr_class($scope["#div/0"], value));
const $await_content2__promiseB = /* @__PURE__ */_._const("promiseB");
const $await_content2__try = /* @__PURE__ */_._try("#text/1", $try_content3);
const $await_content2__setup = $scope => {
  $await_content2__promiseB($scope, resolveAfter("b", 2));
  $await_content2__try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content3($scope)
    })
  });
};
const $await_content2__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $await_content2__value($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_._content_branch("<div level=2><!></div>", /* get, next(1), replace, out(1) */" D%l", $await_content2__setup, $await_content2__$params);
const $placeholder_content2 = _._content_resume("__tests__/template.marko_5_content", "LOADING A2", /* over(1) */"b");
const $placeholder_content = _._content_resume("__tests__/template.marko_4_content", "LOADING A1", /* over(1) */"b");
const $try_content2__await = /* @__PURE__ */_._await("#text/0", $await_content2);
const $try_content2__promiseA = /* @__PURE__ */_._closure_get("promiseA", $try_content2__await, $scope => $scope._._._);
const $try_content2__setup = $try_content2__promiseA;
const $try_content2 = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content2__setup);
const $await_content__value = /* @__PURE__ */_._const("value", ($scope, value) => _._attr_class($scope["#div/0"], value));
const $await_content__try = /* @__PURE__ */_._try("#text/1", $try_content2);
const $await_content__setup = $scope => {
  $await_content__try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content2($scope)
    })
  });
};
const $await_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $await_content__value($scope, $params2[0]));
const $await_content = /* @__PURE__ */_._content_branch("<div level=1><!></div>", /* get, next(1), replace, out(1) */" D%l", $await_content__setup, $await_content__$params);
const $try_content__await = /* @__PURE__ */_._await("#text/0", $await_content);
const $try_content__promiseA = /* @__PURE__ */_._closure_get("promiseA", $try_content__await);
const $try_content__setup = $try_content__promiseA;
const $try_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $promiseA = /* @__PURE__ */_._const("promiseA");
const $try = /* @__PURE__ */_._try("#text/0", $try_content);
export function $setup($scope) {
  $promiseA($scope, resolveAfter("a", 1));
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);