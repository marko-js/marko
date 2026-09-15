// tags/tagged/index.marko
function describe(n) {
	return n.name + "/" + n.self.name;
}
const $label = /*@__PURE__*/ _fill_let("b0", 5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$label($scope, describe($scope.e));
}));
