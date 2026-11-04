// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $placeholder_content2 = _content("__tests__/template.marko_6*content", "<em>inner loading</em>");
const $placeholder_content = _content("__tests__/template.marko_5*content", "<em>outer loading</em>");
const $await_content2__input_msg = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_input_msg#0:4/subscribe", "input_msg/7", ($scope) => _text($scope["#text/0"], $scope._._._._.input_msg), ($scope) => $scope._._._._);
const $await_content2__setup = $await_content2__input_msg;
const $await_content2__$params = ($scope, $params3) => _text($scope["#text/1"], $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<div id=inner><!> <!></div>", "D%c%", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content2__input_inner = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_inner#0:5/subscribe", "input_inner/8", ($scope) => $try_content2__await_promise($scope, $scope._._._.input_inner), ($scope) => $scope._._._);
const $try_content2__setup = ($scope) => {
	$try_content2__input_inner($scope);
	$await_content2($scope);
};
const $await_content__input_msg = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_msg#0:4/subscribe", "input_msg/7", ($scope) => _text($scope["#text/0"], $scope._._.input_msg), ($scope) => $scope._._);
const $await_content__try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content2);
const $await_content__setup = ($scope) => {
	$await_content__input_msg($scope);
	$await_content__try($scope);
};
const $await_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=outer><!> <!></div><!><!>", "D%c%l%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_outer = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_outer#0:3/subscribe", "input_outer/6", ($scope) => $try_content__await_promise($scope, $scope._.input_outer));
const $try_content__setup = ($scope) => {
	$try_content__input_outer($scope);
	$await_content($scope);
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup = $try;
const $input = ($scope, input) => {
	$input_outer($scope, input.outer);
	$input_msg($scope, input.msg);
	$input_inner($scope, input.inner);
};
const $input_outer__closure = /*@__PURE__*/ _closure($try_content__input_outer);
const $input_outer = /*@__PURE__*/ _const("input_outer", $input_outer__closure);
const $input_msg__closure = /*@__PURE__*/ _closure($await_content__input_msg, $await_content2__input_msg);
const $input_msg = /*@__PURE__*/ _const("input_msg", $input_msg__closure);
const $input_inner__closure = /*@__PURE__*/ _closure($try_content2__input_inner);
const $input_inner = /*@__PURE__*/ _const("input_inner", $input_inner__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
