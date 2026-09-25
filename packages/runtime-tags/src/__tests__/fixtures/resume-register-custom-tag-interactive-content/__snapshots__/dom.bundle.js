// template.marko
const $heading_content__if = /*@__PURE__*/ _if(2, "<em>odd</em>");
const $heading_content__count = /*@__PURE__*/ _closure_get(2, ($scope) => {
	_text($scope.b, $scope._.b);
	$heading_content__if($scope, $scope._.b % 2 ? 0 : 1);
}, 0, "a1", 1);
const $heading_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, +$scope._.b + 1);
}));
const $count = /*@__PURE__*/ _let(1, /* @__PURE__ */ _closure($heading_content__count));
