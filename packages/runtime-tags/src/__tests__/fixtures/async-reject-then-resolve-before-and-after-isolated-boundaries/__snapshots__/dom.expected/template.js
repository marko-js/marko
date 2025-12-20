export const $template = "<!><!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(1), replace, over(2) */"b%b%b%c";
import { resolveAfter, rejectAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content3__v = ($scope, v) => _._text($scope["#text/0"], v);
const $await_content3__setup__script = _._script("__tests__/template.marko_9", $scope => _._on($scope["#button/1"], "click", function () {
  document.querySelector("button").textContent = "After";
}));
const $await_content3__setup = $await_content3__setup__script;
const $await_content3__$params = ($scope, $params4) => $await_content3__v($scope, $params4[0]);
const $catch_content3 = _._content_resume("__tests__/template.marko_8_content", "Rejected C", /* over(1) */"b");
const $await_content3 = /* @__PURE__ */_._await_content("#text/0", "<div>Resolved C: <!></div><button>Before</button>", /* next(1), over(1), replace, out(1), get, over(1) */"Db%l b", $await_content3__setup);
const $try_content3__await_promise = /* @__PURE__ */_._await_promise("#text/0", $await_content3__$params);
const $try_content3__setup = $scope => {
  $await_content3($scope);
  $try_content3__await_promise($scope, resolveAfter("C Value", 2));
};
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
const $try3 = /* @__PURE__ */_._try("#text/2", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content3__setup);
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
  $try3($scope, {
    catch: _.attrTag({
      content: $catch_content3($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);