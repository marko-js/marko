// tags/doubler/index.marko
const $template$1 = "<span>x2</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
const $double$1 = /*@__PURE__*/ _const("double", ($scope) => _return($scope, $scope.double));
const $input_value = ($scope, input_value) => $double$1($scope, input_value * 2);
const $input = ($scope, input) => $input_value($scope, input.value);
var doubler_default = /*@__PURE__*/ _template("__tests__/tags/doubler/index.marko", $template$1, "b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&%b l`)("b");
const $count = /*@__PURE__*/ _let("count/4", ($scope) => $input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $double);
	$count($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<p>big</p>");
const $double = _var_resume("__tests__/template.marko_0_double/var", ($scope, double) => $if($scope, double > 2 ? 0 : 1));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
