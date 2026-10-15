// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0&b/${_w0}&%b%c`)($walks$1);
const $for_content__x = /*@__PURE__*/ _for_closure("#text/4", ($scope) => $input_value($scope["#childScope/0"], $scope["#LoopKey"] + $scope._.x));
const $for_content__setup = $for_content__x;
const $if_content__x = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => $input_value($scope["#childScope/0"], $scope._.x));
const $if_content__setup = $if_content__x;
const $Inc_content__a = /*@__PURE__*/ _const("a", ($scope) => _return($scope, $scope.a + 1));
const $Inc_content__$params = ($scope, $params2) => $Inc_content__$temp($scope, $params2[0]);
const $Inc_content__$temp = ($scope, $temp) => $Inc_content__a($scope, $temp.a);
const $if = /*@__PURE__*/ _if("#text/3", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/4", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup);
const $x = _var_resume("__tests__/template.marko_0_x#8/var", /*@__PURE__*/ _const("x", ($scope) => {
	$input_value($scope["#childScope/2"], $scope.x);
	$if($scope, $scope.x > 1 ? 0 : 1);
	$for($scope, [
		$scope.x,
		0,
		1
	]);
	$if_content__x($scope);
	$for_content__x($scope);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $x);
}
const $input_a = ($scope, input_a) => $Inc_content__a($scope["#childScope/0"], input_a);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/show-value.marko
const $template = "<span> </span>";
const $walks = " D l";
const $setup = () => {};
const $input_value__script = _script("__tests__/tags/show-value.marko_0_input_value#4", ($scope) => _el_read($scope["#span/0"]).dataset.value = String($scope.input_value));
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	_text($scope["#text/1"], $scope.input_value);
	$input_value__script($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
var show_value_default = /*@__PURE__*/ _template("__tests__/tags/show-value.marko", $template, $walks, 0, $input);
