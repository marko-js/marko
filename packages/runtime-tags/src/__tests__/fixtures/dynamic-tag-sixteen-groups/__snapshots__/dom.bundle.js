// tags/child.marko
const $template = "<div id=d0></div><div id=d1></div><div id=d2></div><div id=d3></div><div id=d4></div><div id=d5></div><div id=d6></div><div id=d7></div><div id=d8></div><div id=d9></div><div id=d10></div><div id=d11></div><div id=d12></div><div id=d13></div><div id=d14></div><div id=d15></div>";
const $walks = " b b b b b b b b b b b b b b b b";
const $p = ($scope, p0) => _attr($scope.a, "data-p", p0);
const $p2 = ($scope, p1) => _attr($scope.b, "data-p", p1);
const $p3 = ($scope, p2) => _attr($scope.c, "data-p", p2);
const $p4 = ($scope, p3) => _attr($scope.d, "data-p", p3);
const $p5 = ($scope, p4) => _attr($scope.e, "data-p", p4);
const $p6 = ($scope, p5) => _attr($scope.f, "data-p", p5);
const $p7 = ($scope, p6) => _attr($scope.g, "data-p", p6);
const $p8 = ($scope, p7) => _attr($scope.h, "data-p", p7);
const $p9 = ($scope, p8) => _attr($scope.i, "data-p", p8);
const $p10 = ($scope, p9) => _attr($scope.j, "data-p", p9);
const $p11 = ($scope, p10) => _attr($scope.k, "data-p", p10);
const $p12 = ($scope, p11) => _attr($scope.l, "data-p", p11);
const $p13 = ($scope, p12) => _attr($scope.m, "data-p", p12);
const $p14 = ($scope, p13) => _attr($scope.n, "data-p", p13);
const $p15 = ($scope, p14) => _attr($scope.o, "data-p", p14);
const $p16 = ($scope, p15) => _attr($scope.p, "data-p", p15);
const $input = ($scope, input) => {
	$p($scope, input.p0);
	$p2($scope, input.p1);
	$p3($scope, input.p2);
	$p4($scope, input.p3);
	$p5($scope, input.p4);
	$p6($scope, input.p5);
	$p7($scope, input.p6);
	$p8($scope, input.p7);
	$p9($scope, input.p8);
	$p10($scope, input.p9);
	$p11($scope, input.p10);
	$p12($scope, input.p11);
	$p13($scope, input.p12);
	$p14($scope, input.p13);
	$p15($scope, input.p14);
	$p16($scope, input.p15);
};
var child_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $n = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c >= 0 ? child_default : null, () => ({
	p0: `v0-${$scope.c}`,
	p1: `v1-${$scope.c}`,
	p2: `v2-${$scope.c}`,
	p3: `v3-${$scope.c}`,
	p4: `v4-${$scope.c}`,
	p5: `v5-${$scope.c}`,
	p6: `v6-${$scope.c}`,
	p7: `v7-${$scope.c}`,
	p8: `v8-${$scope.c}`,
	p9: `v9-${$scope.c}`,
	p10: `v10-${$scope.c}`,
	p11: `v11-${$scope.c}`,
	p12: `v12-${$scope.c}`,
	p13: `v13-${$scope.c}`,
	p14: `v14-${$scope.c}`,
	p15: `v15-${$scope.c}`
})));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.c + 1);
}));
