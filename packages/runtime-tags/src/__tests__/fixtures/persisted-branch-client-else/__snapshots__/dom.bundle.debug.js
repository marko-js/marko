// template.marko
const $template = "<main><h2> </h2><!><button>toggle</button></main>";
const $walks = "E l%b l";
const $else_content__label = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "label", /*@__PURE__*/ _if_closure("#text/1", 1, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $else_content__setup = $else_content__label;
const $if_content__input_yes = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_yes", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_yes)));
const $if_content__setup = $if_content__input_yes;
const $if = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup, "<i> </i>", "D ", $else_content__setup);
const $on = /*@__PURE__*/ _let("on/7", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
const $label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "label", $else_content__label);
const $input_no = ($scope, input_no) => $label($scope, input_no + "!");
const $input_yes = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_yes", ($scope) => {
	_text($scope["#text/0"], $scope.input_yes);
	$if_content__input_yes($scope);
});
const $input = ($scope, input) => {
	$input_no($scope, input.no);
	$input_yes($scope, input.yes);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
