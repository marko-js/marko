// tags/display-intersection.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $input_value__OR__dummy = /*@__PURE__*/ _or(5, ($scope) => _text($scope["#text/0"], ($scope.dummy, $scope.value)));
const $dummy = /*@__PURE__*/ _let("dummy/4", $input_value__OR__dummy);
function $setup$1($scope) {
	$dummy($scope, {});
}
const $value = /*@__PURE__*/ _const("value", $input_value__OR__dummy);
const $input = ($scope, input) => $value($scope, input.value);
var display_intersection_default = /*@__PURE__*/ _template("__tests__/tags/display-intersection.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button></button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D l");
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$value($scope["#childScope/0"], $scope.count);
	$count__script($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
