// template.marko
const $Wrap_content2__count = /*@__PURE__*/ _init_resume("a12", /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g), 0, "a1"));
const $Wrap_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope._, +$scope._.b + 1);
}));
const $Wrap_content__n = /*@__PURE__*/ _init_resume("a10", /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.c, $scope._.b)));
const $if_content__n = /*@__PURE__*/ _fill_let("a5", 1, /* @__PURE__ */ _closure($Wrap_content__n));
const $count = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($Wrap_content2__count));
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
