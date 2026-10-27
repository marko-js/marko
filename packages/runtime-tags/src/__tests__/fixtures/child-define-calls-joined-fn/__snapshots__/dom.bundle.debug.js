// tags/label-view.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks);
const $setup$1 = ($_) => {};
const $Show_content__get__script = _script("__tests__/tags/label-view.marko_1_get#7", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $Show_content__get = /*@__PURE__*/ _const("get", $Show_content__get__script);
const $Show_content__a__OR__b__OR__flag = /*@__PURE__*/ _or(6, ($scope) => $Show_content__get($scope, $scope.flag ? $scope.a : $scope.b), 2);
const $Show_content__a = /*@__PURE__*/ _const("a", $Show_content__a__OR__b__OR__flag);
const $Show_content__b = /*@__PURE__*/ _const("b", $Show_content__a__OR__b__OR__flag);
const $Show_content__flag = /*@__PURE__*/ _const("flag", $Show_content__a__OR__b__OR__flag);
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => {
	$Show_content__a($scope, $temp.a);
	$Show_content__b($scope, $temp.b);
	$Show_content__flag($scope, $temp.flag);
};
const $input_a = ($scope, input_a) => $Show_content__a($scope["#childScope/0"], input_a);
const $input_b = ($scope, input_b) => $Show_content__b($scope["#childScope/0"], input_b);
const $input_flag = ($scope, input_flag) => $Show_content__flag($scope["#childScope/0"], input_flag);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_flag($scope, input.flag);
};
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $input_a($scope["#childScope/0"], $scope.upper ? $scope.up : $scope.low), 2);
const $upper = /*@__PURE__*/ _let("upper/5", $upper__OR__up__OR__low);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$upper($scope, !$scope.upper);
}));
function $setup($scope) {
	$input_flag($scope["#childScope/0"], true);
	$upper($scope, false);
	$setup__script($scope);
}
const $up2 = /*@__PURE__*/ _const("up", $upper__OR__up__OR__low);
const $low2 = /*@__PURE__*/ _const("low", ($scope) => {
	$input_b($scope["#childScope/0"], $scope.low);
	$upper__OR__up__OR__low($scope);
});
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$up2($scope, $up($scope));
	$low2($scope, $low($scope));
});
const $input = ($scope, input) => $input_title($scope, input.title);
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_resumed["__tests__/template.marko_0/up"] = $up;
_resumed["__tests__/template.marko_0/low"] = $low;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
