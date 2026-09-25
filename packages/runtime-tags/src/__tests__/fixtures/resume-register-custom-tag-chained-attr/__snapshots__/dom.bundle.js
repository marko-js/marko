// tags/heading.marko
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get(5, ($scope) => $inputtype_content__dynamicTag($scope, $scope._.e), 0, "b1", 4);
const $inputtype_content = /*@__PURE__*/ _content("b0", "<!><!><!>", "b%", $inputtype_content__input_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, $inputtype_content);
const $input_type = $dynamicTag;

// tags/wrapper.marko
const $heading_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $heading_content__input_content = /*@__PURE__*/ _closure_get(5, ($scope) => $heading_content__dynamicTag($scope, $scope._.e), 0, "c0", 4);
const $heading_content = _content("c1", "<!><!><!>", "b%", $heading_content__input_content);
const $input_kind = ($scope, input_kind) => $input_type($scope.a, input_kind);

// template.marko
const $wrapper_content2 = _content("a1", "chained state string: not registered");
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$input_kind($scope.d, $scope.e % 2 ? "h2" : "h1");
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
