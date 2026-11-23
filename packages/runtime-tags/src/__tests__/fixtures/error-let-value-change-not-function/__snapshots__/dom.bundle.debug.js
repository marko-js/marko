// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_change = ($scope, input_change) => $input_change$1($scope["#childScope/0"], input_change);
const $input = ($scope, input) => $input_change($scope, input.change);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let_change("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
const $input_change = ($scope, input_change) => $count($scope, 0, input_change);
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_change($scope, input.change);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup, $input);
