// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_value = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_value#0:6/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "input_value", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _attr_input_value($scope, "#input/0", $scope._.input_value, $valueChange))));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	_attr_input_value_script($scope, "#input/0");
	_attr_input_checked_script($scope, "#input/1");
});
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$if_content__input_flag._($scope);
	$if_content__setup__script($scope);
};
const $if_content__input_flag = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_flag#0:7/init", /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "input_flag", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _attr_input_checked($scope, "#input/1", $scope._.input_flag, $checkedChange))));
const $n = _let("n/8", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<input class=b><input type=checkbox class=c>", " b ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_value($scope, input.value);
	$input_flag($scope, input.flag);
};
const $input_value = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_value", $if_content__input_value);
const $input_flag = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_flag", $if_content__input_flag);
function $valueChange(next) {
	console.log(next);
}
function $checkedChange(next) {
	console.log(next);
}
_resumed["__tests__/template.marko_1/valueChange"] = $valueChange;
_resumed["__tests__/template.marko_1/checkedChange"] = $checkedChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
