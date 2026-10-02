// tags/counter.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// template.marko
const $placeholder_content = _content("a1", "loading");
const $try_content__if = /*@__PURE__*/ _if(1, "<span>shown</span>");
const $try_content__show = /*@__PURE__*/ _closure_get(3, ($scope) => $try_content__if($scope, $scope._.c ? 0 : 1), 0, "a0");
const $show = /*@__PURE__*/ _let(2, /* @__PURE__ */ _closure($try_content__show));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
