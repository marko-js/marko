// tags/heading.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get(5, ($scope) => $inputtype_content__dynamicTag($scope, $scope._.e), 0, "b1", 4);
const $inputtype_content = /*@__PURE__*/ _content("b0", "<!><!><!>", "b%", $inputtype_content__input_content);
const $inputtype_content2 = /*@__PURE__*/ _content_resume($inputtype_content);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0, $inputtype_content);
const $input_type = $dynamicTag$1;
const $input = ($scope, input) => {
	$input_type($scope, input.type);
	$input_content($scope, input.content);
};
const $input_content__closure = /*@__PURE__*/ _closure($inputtype_content__input_content);
const $input_content = /*@__PURE__*/ _const(4, $input_content__closure);
const $renders = [$inputtype_content2];
var heading_default = /*@__PURE__*/ _template("b", $template, "b%c", 0, $input, $renders);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, _content("a0", "template as value: registered"));
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$dynamicTag($scope, heading_default, () => ({ type: $scope.d % 2 ? "h2" : "h1" }));
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.d + 1);
}));
