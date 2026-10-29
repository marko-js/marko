// template.marko
const $if_content__label = /*@__PURE__*/ _fill_join("a1", 3, /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.d)));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content__label);
const $Panel_content__open = /*@__PURE__*/ _closure_get(6, ($scope) => $Panel_content__if($scope, $scope._.f ? 0 : 1), 0, "a2");
const $open = _let(5, /* @__PURE__ */ _closure($Panel_content__open));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
