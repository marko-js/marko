// template.marko
const $inputtype_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $inputtype_content__input_content = /*@__PURE__*/ _closure_get(5, ($scope) => $inputtype_content__dynamicTag($scope, $scope._.e), 0, "a1");
const $inputtype_content = _content("a0", "<!><!><!>", "b%", $inputtype_content__input_content);
_content_resume($inputtype_content);
const $count = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
