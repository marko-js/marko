export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
import { resolveAfter, rejectAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
_._enable_catch();
const $await_content2__v = /* @__PURE__ */_._const("v", $scope => _._text($scope["#text/0"], $scope.v));
const $await_content2__$params = /* @__PURE__ */_._const("$params3", $scope => $await_content2__v($scope, $scope.$params3[0]));
const $await_content2 = /* @__PURE__ */_._content_branch("<div>Resolved B: <!></div>", /* next(1), over(1), replace, out(1) */"Db%l", 0, $await_content2__$params);
const $catch_content2 = _._content_resume("__tests__/template.marko_5_content", "Rejected B", /* over(1) */"b");
const $try_content2__await = /* @__PURE__ */_._await("#text/0", $await_content2);
const $try_content2__setup = $scope => {
  $try_content2__await($scope, rejectAfter(new Error("rejected b"), 1));
};
const $try_content2 = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content2__setup);
const $await_content__v = /* @__PURE__ */_._const("v", $scope => _._text($scope["#text/0"], $scope.v));
const $await_content__$params = /* @__PURE__ */_._const("$params2", $scope => $await_content__v($scope, $scope.$params2[0]));
const $await_content = /* @__PURE__ */_._content_branch("<div>Resolved A: <!></div>", /* next(1), over(1), replace, out(1) */"Db%l", 0, $await_content__$params);
const $catch_content = _._content_resume("__tests__/template.marko_2_content", "Rejected A", /* over(1) */"b");
const $try_content__await = /* @__PURE__ */_._await("#text/0", $await_content);
const $try_content__setup = $scope => {
  $try_content__await($scope, resolveAfter("A Value", 2));
};
const $try_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $try = /* @__PURE__ */_._try("#text/0", $try_content);
const $try2 = /* @__PURE__ */_._try("#text/1", $try_content2);
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