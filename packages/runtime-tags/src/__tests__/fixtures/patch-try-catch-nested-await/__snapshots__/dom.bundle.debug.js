// template.marko
const $template = "<main><!></main>";
const $walks = "D%l";
const $await_content2__b = ($scope, b) => _text($scope["#text/0"], b);
const $await_content2__$params = ($scope, $params4) => $await_content2__b($scope, $params4[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<span> </span>", "D ", 0, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<strong> </strong>", "D ");
const $await_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $await_content__input_b = /*@__PURE__*/ _closure_get("input_b", ($scope) => $await_content__await_promise($scope, $scope._._.input_b), ($scope) => $scope._._, "__tests__/template.marko_2_input_b#4/subscribe");
const $await_content__setup = ($scope) => {
	$await_content__input_b($scope);
	$await_content2($scope);
};
const $await_content__a = ($scope, a) => _text($scope["#text/0"], a);
const $await_content__$params = ($scope, $params3) => $await_content__a($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em><!><!>", "D l%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_a = /*@__PURE__*/ _closure_get("input_a", ($scope) => $try_content__await_promise($scope, $scope._.input_a), 0, "__tests__/template.marko_1_input_a#3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_a($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($try_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($await_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D%l", $setup, $input);
