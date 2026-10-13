// tags/disclosure.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $disclosure_content__input_suffix = /*@__PURE__*/ _fill_join_closure("a2", 3, _closure_get(4, ($scope) => _text($scope.a, $scope._.d), 0, "a0"), 0);
const $disclosure_content = _content("a1", "<em> </em>", "D ", $disclosure_content__input_suffix);
