// counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $n$1 = /*@__PURE__*/ _fill_let("__tests__/counter.marko0", "n/4", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	_return($scope, $scope.n);
});
const $input$1 = $n$1;
const $setup__script = _script("__tests__/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n$1($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
	$setup__script($scope);
}
const $valueChange = ($scope) => function(v) {
	$n$1($scope, v);
};
_resume("__tests__/counter.marko_0/valueChange", $valueChange);
var counter_default = /*@__PURE__*/ _template("__tests__/counter.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><p> </p></main>";
const $walks = "D1bD m";
const $setup = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, () => $n, 1);
const $n = _var_resume("__tests__/template.marko_0_n#8/var", ($scope, n) => _text($scope["#text/2"], n));
const $input_on__OR__input_start = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_on ? counter_default : null, () => [$scope.input_start]));
const $input_on = /*@__PURE__*/ _const("input_on", $input_on__OR__input_start);
const $input_start = /*@__PURE__*/ _const("input_start", $input_on__OR__input_start);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_start($scope, input.start);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
