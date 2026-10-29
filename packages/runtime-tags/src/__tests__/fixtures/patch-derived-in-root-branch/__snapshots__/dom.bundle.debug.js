// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $if_content__label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "label", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label)));
const $if_content__setup = $if_content__label;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $count__OR__label = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "label", /*@__PURE__*/ _or(7, ($scope) => $if($scope, $scope.count > 0 && $scope.label ? 0 : 1)));
const $count = _let("count/5", $count__OR__label);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "label", ($scope) => {
	$count__OR__label($scope);
	$if_content__label($scope);
});
const $input_label = $label;
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
