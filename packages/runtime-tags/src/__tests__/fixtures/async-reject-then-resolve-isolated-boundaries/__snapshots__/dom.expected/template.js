export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
import { resolveAfter, rejectAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content2__v = ($scope, v) => _._text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $catch_content2 = _._content_resume("__tests__/template.marko_5_content", "Rejected B", /* over(1) */"b");
const $await_content2 = /* @__PURE__ */_._await_content("#text/0", "<div>Resolved B: <!></div>", /* next(1), over(1), replace, out(1) */"Db%l");
const $try_content2__await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = $scope => {
  $await_content2($scope);
  $try_content2__await_promise($scope, rejectAfter(new Error("rejected b"), 1));
};
const $await_content__v = ($scope, v) => _._text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $catch_content = _._content_resume("__tests__/template.marko_2_content", "Rejected A", /* over(1) */"b");
const $await_content = /* @__PURE__ */_._await_content("#text/0", "<div>Resolved A: <!></div>", /* next(1), over(1), replace, out(1) */"Db%l");
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content__$params);
const $try_content__setup = $scope => {
  $await_content($scope);
  $try_content__await_promise($scope, resolveAfter("A Value", 2));
};
const $try = /* @__PURE__ */_._try("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $try2 = /* @__PURE__ */_._try("#text/1", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content2__setup);
export function $setup($scope) {
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
  $try2($scope, {
    catch: _.attrTag({
      content: $catch_content2($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);