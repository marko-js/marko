// template.marko
const $pos = ($scope, pos) => $pos_x($scope, pos.x);
const $pos_x__OR__scale = ($scope) => {
	_text($scope.b, $scope.e + $scope.c * 10);
};
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	$pos($scope, {
		x: $scope.c,
		y: $scope.c + 1
	});
	$pos_x__OR__scale($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $pos_x = /* @__PURE__ */ _const(4);
