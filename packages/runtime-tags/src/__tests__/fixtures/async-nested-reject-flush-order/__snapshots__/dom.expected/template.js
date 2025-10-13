export const $template = "<html><head></head><body><!></body></html>";
export const $walks = /* next(1), over(1), next(1), replace, out(2) */"DbD%m";
import { rejectAfter, resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content2__data = /* @__PURE__ */_._const("data2", ($scope, data2) => _._text($scope["#text/0"], data2));
const $await_content2__$params = /* @__PURE__ */_._const("$params4", ($scope, $params4) => $await_content2__data($scope, $params4[0]));
const $await_content2 = /* @__PURE__ */_._content_branch("<div>Second: <!></div> ", /* next(1), over(1), replace, out(1), over(1) */"Db%lb", 0, $await_content2__$params);
const $await_content__data = /* @__PURE__ */_._const("data1", ($scope, data1) => _._text($scope["#text/0"], data1));
const $await_content__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $await_content__data($scope, $params3[0]));
const $await_content = /* @__PURE__ */_._content_branch("<div>First: <!></div>", /* next(1), over(1), replace, out(1) */"Db%l", 0, $await_content__$params);
const $catch_content__err_message = /* @__PURE__ */_._const("err_message", ($scope, err_message) => _._text($scope["#text/0"], err_message));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $catch_content__err($scope, $params2[0]));
const $catch_content__err = /* @__PURE__ */_._const("err", ($scope, err) => $catch_content__err_message($scope, err?.message));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", "<div>Error: <!></div>", /* next(1), over(1), replace, out(1) */"Db%l", 0, $catch_content__$params);
const $try_content__await = /* @__PURE__ */_._await("#text/0", $await_content);
const $try_content__await2 = /* @__PURE__ */_._await("#text/1", $await_content2);
const $try_content__setup = $scope => {
  $try_content__await($scope, resolveAfter("first", 1));
  $try_content__await2($scope, rejectAfter(new Error("Second failed"), 2));
};
const $try_content = /* @__PURE__ */_._content_branch("<!><!><!><!>", /* over(1), replace, over(1), replace, over(2) */"b%b%c", $try_content__setup);
const $try = /* @__PURE__ */_._try("#text/0", $try_content);
export function $setup($scope) {
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);