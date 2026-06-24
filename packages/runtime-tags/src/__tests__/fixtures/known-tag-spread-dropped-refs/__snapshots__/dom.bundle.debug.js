// tags/child-b/index.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_a = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input = ($scope, input) => $input_a($scope, input.a);
var child_b_default = /*@__PURE__*/ _template("__tests__/tags/child-b/index.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>inc <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)("D l");
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input_a($scope["#childScope/2"], $scope.n);
	$n__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	({ a: 5 });
	({ a: 6 });
	$n($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
