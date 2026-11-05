// template.marko
const $if = /*@__PURE__*/ _if(1, "<!><!><!><!>", "b%b%");
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
