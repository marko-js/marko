// template.marko
const $count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$count__script($scope);
});

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
