// tags/tags-child.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.f + 1);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
