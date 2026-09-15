// tags/child.marko
const $template$1 = "<div id=d0></div><div id=d1></div><div id=d2></div><div id=d3></div><div id=d4></div><div id=d5></div><div id=d6></div><div id=d7></div><div id=d8></div><div id=d9></div><div id=d10></div><div id=d11></div><div id=d12></div><div id=d13></div><div id=d14></div><div id=d15></div>";
const $walks$1 = " b b b b b b b b b b b b b b b b";
const $setup$1 = () => {};
const $p = ($scope, p0) => _attr($scope["#div/0"], "data-p", p0);
const $p2 = ($scope, p1) => _attr($scope["#div/1"], "data-p", p1);
const $p3 = ($scope, p2) => _attr($scope["#div/2"], "data-p", p2);
const $p4 = ($scope, p3) => _attr($scope["#div/3"], "data-p", p3);
const $p5 = ($scope, p4) => _attr($scope["#div/4"], "data-p", p4);
const $p6 = ($scope, p5) => _attr($scope["#div/5"], "data-p", p5);
const $p7 = ($scope, p6) => _attr($scope["#div/6"], "data-p", p6);
const $p8 = ($scope, p7) => _attr($scope["#div/7"], "data-p", p7);
const $p9 = ($scope, p8) => _attr($scope["#div/8"], "data-p", p8);
const $p10 = ($scope, p9) => _attr($scope["#div/9"], "data-p", p9);
const $p11 = ($scope, p10) => _attr($scope["#div/10"], "data-p", p10);
const $p12 = ($scope, p11) => _attr($scope["#div/11"], "data-p", p11);
const $p13 = ($scope, p12) => _attr($scope["#div/12"], "data-p", p12);
const $p14 = ($scope, p13) => _attr($scope["#div/13"], "data-p", p13);
const $p15 = ($scope, p14) => _attr($scope["#div/14"], "data-p", p14);
const $p16 = ($scope, p15) => _attr($scope["#div/15"], "data-p", p15);
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
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<button id=inc></button><!><!>";
const $walks = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $dynamicTag($scope, $scope.n >= 0 ? child_default : null, () => ({
	p0: `v0-${$scope.n}`,
	p1: `v1-${$scope.n}`,
	p2: `v2-${$scope.n}`,
	p3: `v3-${$scope.n}`,
	p4: `v4-${$scope.n}`,
	p5: `v5-${$scope.n}`,
	p6: `v6-${$scope.n}`,
	p7: `v7-${$scope.n}`,
	p8: `v8-${$scope.n}`,
	p9: `v9-${$scope.n}`,
	p10: `v10-${$scope.n}`,
	p11: `v11-${$scope.n}`,
	p12: `v12-${$scope.n}`,
	p13: `v13-${$scope.n}`,
	p14: `v14-${$scope.n}`,
	p15: `v15-${$scope.n}`
})));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
