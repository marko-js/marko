// tags/child.marko
const $template$1 = "<span><!>|<!></span>";
const $walks$1 = "D%c%l";
const $setup$1 = () => {};
const $input_a = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input_b = ($scope, input_b) => _text($scope["#text/1"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button></button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $o = /*@__PURE__*/ _let("o/2", ($scope) => {
	$o_a($scope, $scope.o?.a);
	$o_b($scope, $scope.o?.b);
});
const $o_a = /*@__PURE__*/ _const("o_a", ($scope) => $input_a($scope["#childScope/0"], $scope.o_a));
const $o_b = /*@__PURE__*/ _const("o_b", ($scope) => $input_b($scope["#childScope/0"], $scope.o_b));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$o($scope, {
		a: 3,
		b: 4
	});
}));
function $setup($scope) {
	$o($scope, {
		a: 1,
		b: 2
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
