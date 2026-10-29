// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $if_content__input_label__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_label + ": " + $scope._.count));
const $if_content__input_label__script = _script("__tests__/template.marko_1_input_label#0:6", ($scope) => document.body.dataset.label = $scope._.input_label);
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$if_content__input_label__OR__count($scope);
	$if_content__input_label__script($scope);
});
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__count);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
