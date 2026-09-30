// tags/page.marko
const $await_content__likes = _init_closure_get("b7", 5, ($scope) => _text($scope.c, $scope._.e), 0, "b4");
const $await_content__open = /*@__PURE__*/ _fill_let("b3", 6, ($scope) => _text($scope.d, $scope.g ? "open" : "closed"));
const $await_content__setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$await_content__open($scope, !$scope.g);
	$likes($scope._, +$scope._.e + 1);
}));
const $likes = /*@__PURE__*/ _fill_let("b5", 4, /* @__PURE__ */ _closure($await_content__likes));
