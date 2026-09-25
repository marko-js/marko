// tags/heading.marko
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get(5, ($scope) => $inputtype_content__dynamicTag($scope, $scope._.e), 0, "b1", 4);
const $inputtype_content = /*@__PURE__*/ _content("b0", "<!><!><!>", "b%", $inputtype_content__input_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputtype_content);
const $input_type = $dynamicTag;

// template.marko
const $heading_content = _content("a0", "state driven string: not registered");
const $big = /*@__PURE__*/ _let(3, ($scope) => $input_type($scope.b, $scope.d ? "h1" : "h2"));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$big($scope, !$scope.d);
}));
