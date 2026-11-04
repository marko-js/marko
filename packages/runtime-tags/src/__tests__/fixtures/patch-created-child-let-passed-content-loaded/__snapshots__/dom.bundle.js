// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script$2 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/outer.marko
const $o = /*@__PURE__*/ _fill_let("c1", 5, ($scope) => $input_content($scope.b, $scope.f));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));

// template.marko
const $n = _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
