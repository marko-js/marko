// template.marko
const $template = "<h1> </h1><!><button> </button>";
const $walks = "D l%b D l";
const $if_content__input_label__OR__count = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_input_label#0:6_count#0:9/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_label + ": " + $scope._.count));
const $if_content__input_label__script = _script("__tests__/template.marko_1_input_label#0:6", ($scope) => document.body.dataset.label = $scope._.input_label);
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:6/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => {
	$if_content__input_label__OR__count($scope);
	$if_content__input_label__script($scope);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__count._($scope);
};
const $if_content__count = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_label__OR__count);
const $value = ($scope, value) => _text($scope["#text/0"], value);
_fill_run("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$if_content__input_label($scope);
	$value($scope, $scope.input_label);
});
const $count = /*@__PURE__*/ _let("count/9", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
