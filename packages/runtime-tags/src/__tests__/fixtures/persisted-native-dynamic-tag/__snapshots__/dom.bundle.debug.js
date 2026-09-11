// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $inputonsectionarticle_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko1", "input_label", /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/0"], $scope._.input_label)), 0);
const $inputonsectionarticle_content__setup = ($scope) => {
	$inputonsectionarticle_content__input_label($scope);
	$inputonsectionarticle_content__count($scope);
};
const $inputonsectionarticle_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._.count));
const $inputonsectionarticle_content = _content_resume("__tests__/template.marko_1*content", "<!> <!>", "%c%", $inputonsectionarticle_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputonsectionarticle_content);
const $input_on__OR__input_label__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko1", "input_label", /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_on", /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.input_on ? "section" : "article", () => ({
	class: $scope.input_label,
	"data-count": $scope.count
})), 2)));
const $count__closure = /*@__PURE__*/ _closure($inputonsectionarticle_content__count);
const $count = /*@__PURE__*/ _let("count/6", ($scope) => {
	$input_on__OR__input_label__OR__count($scope);
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_on = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_on", $input_on__OR__input_label__OR__count);
const $input_label__closure = /*@__PURE__*/ _closure($inputonsectionarticle_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_label", ($scope) => {
	$input_on__OR__input_label__OR__count($scope);
	$input_label__closure($scope);
});
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
