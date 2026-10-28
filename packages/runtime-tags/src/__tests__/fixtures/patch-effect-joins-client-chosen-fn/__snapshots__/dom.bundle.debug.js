// template.marko
const $template = "<button>toggle</button>";
const $walks = " b";
const $n__OR__pick__script = _script("__tests__/template.marko_0_n#5_pick#9", ($scope) => console.log("run", $scope.pick(), $scope.n));
const $n__OR__pick = /*@__PURE__*/ _or(10, $n__OR__pick__script);
const $pick = /*@__PURE__*/ _const("pick", $n__OR__pick);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_upper#4_up#6_low#7/init", 8, ($scope) => $pick($scope, $scope.upper ? $scope.up : $scope.low), 2);
const $upper = _let("upper/4", $upper__OR__up__OR__low);
const $n = _let("n/5", $n__OR__pick);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$upper($scope, !$scope.upper);
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$upper($scope, false);
	$n($scope, 0);
	$setup__script($scope);
}
const $up2 = /*@__PURE__*/ _const("up", $upper__OR__up__OR__low);
const $low2 = /*@__PURE__*/ _const("low", $upper__OR__up__OR__low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $input = ($scope, input) => $input_title($scope, input.title);
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_bind_resume("__tests__/template.marko_0/up input_title", $up);
_bind_resume("__tests__/template.marko_0/low input_title", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
