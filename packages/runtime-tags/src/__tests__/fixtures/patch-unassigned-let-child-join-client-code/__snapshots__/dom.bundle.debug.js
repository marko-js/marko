// tags/child.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_name__OR__uid = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.uid + "-" + $scope.input_name));
const $uid = _fill_resume("__tests__/tags/child.marko_fill1", /*@__PURE__*/ _let("uid/5", $input_name__OR__uid));
const $input_id$1 = $uid;
const $input_name$1 = _fill_resume("__tests__/tags/child.marko_fill0", /*@__PURE__*/ _const("input_name", $input_name__OR__uid));
const $input$1 = ($scope, input) => {
	$input_id$1($scope, input.id);
	$input_name$1($scope, input.name);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)("D l");
const $input_id = ($scope, input_id) => $input_id$1($scope["#childScope/0"], input_id);
const $input_name = ($scope, input_name) => $input_name$1($scope["#childScope/0"], input_name);
const $n = /*@__PURE__*/ _let("n/7", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_name($scope, input.name);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
