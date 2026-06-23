// components/custom-tag.marko
const $x__OR__y = /* @__PURE__ */ _or(9, _script("b0", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.h + 1);
	$y($scope, $scope.i + 1);
})));
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(3, 0, 0, 1);
const $input_content__OR__x__OR__y = /* @__PURE__ */ _or(10, ($scope) => $dynamicTag($scope, $scope.g, () => [$scope.h, $scope.i]), 2);
const $x = /* @__PURE__ */ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});
const $y = /* @__PURE__ */ _let(8, ($scope) => {
	_text($scope.c, $scope.i);
	$x__OR__y($scope);
	$input_content__OR__x__OR__y($scope);
});

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
