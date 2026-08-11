// template.marko
const $attrs2__script = _script("a1", ($scope) => _attrs_script($scope, "b"));
const $attrs2 = /*@__PURE__*/ _const(7, ($scope) => {
	_attrs($scope, "b", $scope.h, _controllable_open);
	$attrs2__script($scope);
});
const $open__OR__n = /*@__PURE__*/ _or(6, ($scope) => $attrs2($scope, {
	open: $scope.e,
	openChange: $attrs($scope),
	"data-n": $scope.f
}));
const $open = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.c, $scope.e ? "open" : "closed");
	$open__OR__n($scope);
});
const $n = /*@__PURE__*/ _let(5, ($scope) => {
	_text($scope.d, $scope.f);
	$open__OR__n($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
const $attrs = ($scope) => function(next) {
	$open($scope, next);
};
_resume("a0", $attrs);
