// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_join("b1", 5, /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f)));
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__input_content);
const $n = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g < 2 ? 0 : 1);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// template.marko
const $view_content__input_w = /*@__PURE__*/ _fill_join_closure("a2", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.d), 0, "a1"), 0);
const $view_content = _content$1("a0", "<p> </p>", "D ", $view_content__input_w);
_content_resume($view_content);
