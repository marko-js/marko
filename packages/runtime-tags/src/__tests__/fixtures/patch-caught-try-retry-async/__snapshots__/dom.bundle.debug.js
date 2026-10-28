// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $catch_content = _content("__tests__/template.marko_3*content", "Unavailable");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_value = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_value#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_value", /*@__PURE__*/ _closure_get("input_value/5", ($scope) => $try_content__await_promise($scope, $scope._._.input_value), ($scope) => $scope._._, "__tests__/template.marko_2_input_value#0:4/subscribe"), 0));
const $try_content__setup = ($scope) => {
	$try_content__input_value($scope);
	$await_content($scope);
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $if_content__setup = $if_content__try;
const $if = /*@__PURE__*/ _if("#main/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_value($scope, input.value);
};
const $input_value__closure = /*@__PURE__*/ _closure($try_content__input_value);
const $input_value = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_value", $input_value__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
