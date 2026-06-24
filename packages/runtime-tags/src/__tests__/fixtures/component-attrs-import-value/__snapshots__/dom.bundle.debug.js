// helpers.ts
const formatNumber = (n) => {
	return "$" + n.toFixed(2);
};

// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $input__OR__count = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/1"], $scope.input.format($scope.count)));
const $count__script = _script("__tests__/tags/counter.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	$input__OR__count($scope);
	$count__script($scope);
});
function $setup$1($scope) {
	$count($scope, 0);
}
const $input = /*@__PURE__*/ _const("input", $input__OR__count);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { format: formatNumber });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
