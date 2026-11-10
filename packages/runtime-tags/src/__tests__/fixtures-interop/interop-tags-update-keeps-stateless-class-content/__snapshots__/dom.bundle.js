// components/tags-child.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2);
const $input_content__OR__m = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.f, ($_) => ({ m: $scope.g })));
const $m = /*@__PURE__*/ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$input_content__OR__m($scope);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$m($scope, +$scope.g + 1);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
