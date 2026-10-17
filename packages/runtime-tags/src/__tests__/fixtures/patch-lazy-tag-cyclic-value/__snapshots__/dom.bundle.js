// tagged.marko
function describe(n) {
	return n.name + "/" + n.self.name;
}
const $label = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$label($scope, describe($scope.e));
}));
