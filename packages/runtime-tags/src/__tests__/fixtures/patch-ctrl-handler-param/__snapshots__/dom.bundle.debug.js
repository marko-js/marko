// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_onChange = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_onChange", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _attr_input_value($scope, "#input/0", "x", $scope._.input_onChange)));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $if_content__setup = ($scope) => {
	$if_content__input_onChange._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<input>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
const $input = ($scope, input) => $input_onChange($scope, input.onChange);
const $input_onChange = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_onChange", $if_content__input_onChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
