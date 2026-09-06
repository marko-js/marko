// tags/card/index.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_header = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if_content__setup = $if_content__input_header;
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b1", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $header_content__input_note = /*@__PURE__*/ _fill_join_closure("a0", 3, /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d)), 0);
const $header_content = _content_resume("a0", "<em> </em>", "D ", $header_content__input_note);
