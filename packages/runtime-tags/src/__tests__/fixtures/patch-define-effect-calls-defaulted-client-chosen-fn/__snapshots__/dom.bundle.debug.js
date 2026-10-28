// template.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Show_content__walks);
const $Show_content__g__script = _script("__tests__/template.marko_1_g#4", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.g();
	console.log("run", $scope.g());
});
const $Show_content__g = /*@__PURE__*/ _const("g", $Show_content__g__script);
const $Show_content__get = ($scope, get) => $Show_content__g($scope, get ?? $g);
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => $Show_content__get($scope, $temp.get);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_upper#5_up#6_low#7/init", 8, ($scope) => $Show_content__get($scope["#childScope/0"], $scope.upper ? $scope.up : $scope.low), 2);
const $upper = _let("upper/5", $upper__OR__up__OR__low);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$upper($scope, !$scope.upper);
}));
function $setup($scope) {
	$upper($scope, false);
	$setup__script($scope);
}
const $up2 = /*@__PURE__*/ _const("up", $upper__OR__up__OR__low);
const $low2 = /*@__PURE__*/ _const("low", $upper__OR__up__OR__low);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $input = ($scope, input) => $input_title($scope, input.title);
function $g() {
	return "none";
}
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_resumed["__tests__/template.marko_1/g"] = $g;
_bind_resume("__tests__/template.marko_0/up input_title", $up);
_bind_resume("__tests__/template.marko_0/low input_title", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
