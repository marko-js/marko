// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(2, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.f));
const $if = /*@__PURE__*/ _if(2, "<!><!><!>", "b%", $if_content__input_content);
const $n = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if($scope, $scope.g < 2 ? 0 : 1);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// template.marko
const $if_content__input_w = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a0");
const $wrap_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_w);
const $wrap_content = _content("a1", "<!><!><!>", "b%", /* @__PURE__ */ _closure_get(7, ($scope) => $wrap_content__if($scope, $scope._.f ? 0 : 1)));
