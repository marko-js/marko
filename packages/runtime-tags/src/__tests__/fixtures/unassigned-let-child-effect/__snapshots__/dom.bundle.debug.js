// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = ($_) => {};
const $x = /*@__PURE__*/ _let("x/5", ($scope) => $input_v$1($scope["#childScope/0"], $scope.x));
const $input_v = $x;
const $input_w = ($scope, input_w) => $input_w$1($scope["#childScope/0"], input_w);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/child.marko
const $template = "<p><!><!></p>";
const $walks = "D%b%l";
const $setup = ($_) => {};
const $input_v__script = _script("__tests__/tags/child.marko_0_input_v#4", ($scope) => console.log("v", $scope.input_v));
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => {
	_text($scope["#text/0"], $scope.input_v);
	$input_v__script($scope);
});
const $input_w = ($scope, input_w) => _text($scope["#text/1"], input_w);
const $input = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, 0, $input);
