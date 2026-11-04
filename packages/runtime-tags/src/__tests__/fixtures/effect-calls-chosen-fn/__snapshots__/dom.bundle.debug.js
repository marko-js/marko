// template.marko
const $template = "<output></output>";
const $walks = " b";
const $setup = ($_) => {};
const $pick__script = _script("__tests__/template.marko_0_pick#8", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.pick();
	console.log("run", $scope.pick());
});
const $pick = /*@__PURE__*/ _const("pick", $pick__script);
const $input_upper__OR__up__OR__low = /*@__PURE__*/ _or(7, ($scope) => $pick($scope, $scope.input_upper ? $scope.up : $scope.low), 2);
const $up2 = /*@__PURE__*/ _const("up", $input_upper__OR__up__OR__low);
const $low2 = /*@__PURE__*/ _const("low", $input_upper__OR__up__OR__low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $input_upper = /*@__PURE__*/ _const("input_upper", $input_upper__OR__up__OR__low);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_upper($scope, input.upper);
};
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_resumed["__tests__/template.marko_0/up"] = $up;
_resumed["__tests__/template.marko_0/low"] = $low;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
