// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_data($scope["#childScope/0"], {
	a: "SECRET_" + $scope._.input_label,
	b: $scope._.input_label
}))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/child.marko
const $template = "<button class=set>set</button><p> </p>";
const $walks = " bD l";
const $value = /*@__PURE__*/ _let("value/5", ($scope) => $value_b($scope, $scope.value?.b));
const $value_b__OR__n = /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_value_b#6_n#7/init", 8, ($scope) => _text($scope["#text/1"], $scope.value_b + $scope.n));
const $value_b = /*@__PURE__*/ _const("value_b", $value_b__OR__n);
const $input_data = $value;
const $n = /*@__PURE__*/ _let("n/7", $value_b__OR__n);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, {
		a: "y",
		b: "z"
	});
}));
function $setup($scope) {
	$n($scope, 1);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_data($scope, input.data);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
