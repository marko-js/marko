// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params3) => $await_content2__b($scope, $params3[0]);
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params2) => $await_content__a($scope, $params2[0]);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "<em>loading</em>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<span> </span>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get("input_a", ($scope) => $try_content__await_promise($scope, $scope._.input_a));
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$try_content__input_b($scope);
	$await_content($scope);
	$await_content2($scope);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<span> </span>", "D ");
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $try_content__input_b = /*@__PURE__*/ _closure_get("input_b", ($scope) => $try_content__await_promise2($scope, $scope._.input_b));
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($try_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($try_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
