// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_on__OR__active = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_on", /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.input_on ? card_a_default : null, () => ({ label: $scope.active }))));
const $active = /*@__PURE__*/ _let("active/5", $input_on__OR__active);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$active($scope, !$scope.active);
}));
function $setup($scope) {
	$active($scope, false);
	$setup__script($scope);
}
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_on", $input_on__OR__active);
const $input = ($scope, input) => $input_on($scope, input.on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
