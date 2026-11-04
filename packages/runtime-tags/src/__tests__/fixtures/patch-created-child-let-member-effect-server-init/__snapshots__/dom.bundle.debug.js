// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_b = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_b#0:4/setup", "#text/0", 0, ($scope) => $input_data($scope["#childScope/0"], {
	a: { b: $scope._.input_b },
	n: "SECRET_"
}));
const $if_content__setup = $if_content__input_b;
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/child.marko
const $template = "<div></div>";
const $walks = " b";
const $setup = ($_) => {};
const $value = _fill_let_resume("__tests__/tags/child.marko_0_value#4/fill", "value/4", ($scope) => $value_a($scope, $scope.value?.a));
const $value_a = /*@__PURE__*/ _const("value_a", ($scope) => $value_a_b($scope, $scope.value_a?.b));
const $value_a_b__script = _script("__tests__/tags/child.marko_0_value_a_b#6", ($scope) => _el_read($scope["#div/0"]).textContent += $scope.value_a_b);
const $value_a_b = /*@__PURE__*/ _const("value_a_b", $value_a_b__script);
const $input_data = $value;
const $input = ($scope, input) => $input_data($scope, input.data);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, " b", 0, $input);
