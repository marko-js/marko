// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__msg = ($scope, msg) => _text($scope["#text/0"], msg);
const $await_content2__$params = ($scope, $params5) => $await_content2__msg($scope, $params5[0]);
const $catch_content2__error_message = ($scope, error_message) => _text($scope["#text/0"], error_message);
const $catch_content2__$params = ($scope, $params4) => $catch_content2__error_message($scope, $params4[0]?.message);
const $catch_content2 = _content("__tests__/template.marko_5*content", "Caught: <!>", "b%", 0, $catch_content2__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("Failure"), 1));
};
const $await_content__msg = ($scope, msg) => _text($scope["#text/0"], msg);
const $await_content__$params = ($scope, $params3) => $await_content__msg($scope, $params3[0]);
const $catch_content__error_message = ($scope, error_message) => _text($scope["#text/0"], error_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__error_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_2*content", "Caught: <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("Success", 2));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $try2 = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content2);
function $setup($scope) {
	$try($scope);
	$try2($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
