// template.marko
const $template = "<p> </p><input><input><!><button> </button>";
const $walks = "D l b b%b D l";
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:8/setup", "#text/3", 0, ($scope) => _text($scope["#text/0"], $scope._.input_label));
const $if_content__setup = $if_content__input_label;
const $if = /*@__PURE__*/ _if("#text/3", "<em> </em>", "D ", $if_content__setup);
const $input_label__OR__count = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_label#8_count#9/setup", 10, ($scope) => _attr_input_value($scope, "#input/2", String($scope.count), $valueChange2($scope)));
const $count = _let("count/9", ($scope) => {
	_text($scope["#text/5"], $scope.count);
	$if($scope, $scope.count ? 0 : 1);
	$input_label__OR__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_attr_input_value_script($scope, "#input/1");
	_attr_input_value_script($scope, "#input/2");
	_on($scope["#button/4"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__count($scope);
	$if_content__input_label($scope);
	_text($scope["#text/0"], $scope.input_label);
	_attr_input_value($scope, "#input/1", $scope.input_label, $valueChange($scope));
});
const $input = ($scope, input) => $input_label($scope, input.label);
const $valueChange2 = ($scope) => function(v) {
	console.log(v + ":" + $scope.input_label);
};
const $valueChange = ($scope) => function(v) {
	console.log(v + ":" + $scope.input_label);
};
_bind_resume("__tests__/template.marko_0/valueChange2 input_label", $valueChange2);
_bind_resume("__tests__/template.marko_0/valueChange input_label", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
