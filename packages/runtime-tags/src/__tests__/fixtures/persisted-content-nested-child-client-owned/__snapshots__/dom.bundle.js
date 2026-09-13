// tags/grand/index.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("c0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("c0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $child_content__input_note = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e)), 0);
const $child_content = _content_resume("a0", "<em> </em>", "D ", $child_content__input_note);
