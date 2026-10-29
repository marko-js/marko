// tags/child.marko
const $template$1 = "<button class=set>set</button><p> </p>";
const $walks$1 = " bD l";
const $value__OR__n = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.value + $scope.n));
const $value = /*@__PURE__*/ _let("value/5", $value__OR__n);
const $input_data = $value;
const $n = /*@__PURE__*/ _let("n/6", $value__OR__n);
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, "z");
}));
function $setup$1($scope) {
	$n($scope, 1);
	$setup__script$1($scope);
}
const $input$1 = ($scope, input) => $input_data($scope, input.data);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_data($scope["#childScope/0"], $scope._.count));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
