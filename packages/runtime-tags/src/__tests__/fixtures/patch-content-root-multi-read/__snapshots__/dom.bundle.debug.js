// template.marko
const $template = "<main><!><p> </p><button>+</button></main>";
const $walks = "D%bD l l";
const $input_content__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_content", /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.input_content + ":" + $scope.count)));
const $count = /*@__PURE__*/ _let("count/6", $input_content__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_content", ($scope) => {
	$dynamicTag($scope, $scope.input_content);
	$input_content__OR__count($scope);
});
const $input = ($scope, input) => $input_content($scope, input.content);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
