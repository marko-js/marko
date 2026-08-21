// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], (console.log("body-ran:b", v), v));
const $await_content2__$params = ($scope, $params3) => $await_content2__v($scope, $params3[0]);
const $catch_content2 = _content_resume("__tests__/template.marko_5*content", "caught-b");
const $await_content__v = ($scope, v) => _text($scope["#text/0"], (console.log("body-ran:a", v), v));
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "caught-a");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<p>B:<!></p>", "Db%");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__input_b = /*@__PURE__*/ _closure_get("input_b", ($scope) => $try_content2__await_promise($scope, $scope._.input_b));
const $try_content2__setup = ($scope) => {
	$try_content2__input_b($scope);
	$await_content2($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p>A:<!></p>", "Db%");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get("input_a", ($scope) => $try_content__await_promise($scope, $scope._.input_a));
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
const $try2 = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
	$try2($scope, { catch: attrTag({ content: $catch_content2($scope) }) });
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($try_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($try_content2__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
