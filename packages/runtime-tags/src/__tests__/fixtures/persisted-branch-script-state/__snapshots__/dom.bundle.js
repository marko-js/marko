// template.marko
const $if_content__count = /*@__PURE__*/ _resume("a4", /*@__PURE__*/ _if_closure(1, 0, _script("a1", ($scope) => document.querySelector("main").dataset.count = String($scope._.h))));
const $count = /*@__PURE__*/ _let(7, $if_content__count);
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
