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
const $await_content__input_w__OR__r = /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + $scope._._._.f));
const $await_content__input_w = /*@__PURE__*/ _closure_get(8, $await_content__input_w__OR__r, ($scope) => $scope._._._, "a0");
const $await_content__setup = $await_content__input_w;
const $await_content__r = /*@__PURE__*/ _const(2, $await_content__input_w__OR__r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<p> </p>", "D ", $await_content__setup);
const $wrap_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $wrap_content__input_v = /*@__PURE__*/ _closure_get(7, ($scope) => $wrap_content__await_promise($scope, Promise.resolve($scope._._.e)), ($scope) => $scope._._, "a1");
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_v($scope);
	$await_content($scope);
};
const $wrap_content = _content("a2", "<!><!><!>", "b%", $wrap_content__setup);
