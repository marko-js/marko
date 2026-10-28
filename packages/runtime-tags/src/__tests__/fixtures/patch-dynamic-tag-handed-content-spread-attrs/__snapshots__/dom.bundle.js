// template.marko
const $one_content = _content$1("a0", "A");
const $z = _let(5);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$z($scope, +$scope.f + 1);
}));
