// tags/mid-define.marko
const $Show_content__walks = " b";
const $Show_content__template = "<output></output>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Show_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Show_content__walks);
const $setup$1 = ($_) => {};
const $Show_content__get__script = _script("__tests__/tags/mid-define.marko_1_get#3", ($scope) => {
	_el_read($scope["#output/0"]).textContent = $scope.get();
	console.log("run", $scope.get());
});
const $Show_content__get = /*@__PURE__*/ _const("get", $Show_content__get__script);
const $Show_content__$params = ($scope, $params2) => $Show_content__$temp($scope, $params2[0]);
const $Show_content__$temp = ($scope, $temp) => $Show_content__get($scope, $temp.get);
const $input_get = ($scope, input_get) => $Show_content__get($scope["#childScope/0"], input_get);
const $input$1 = ($scope, input) => $input_get($scope, input.get);
var mid_define_default = /*@__PURE__*/ _template("__tests__/tags/mid-define.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $upper__OR__up__OR__low = /*@__PURE__*/ _or_resume("__tests__/template.marko_0_upper#5_up#6_low#7/init", 8, ($scope) => $input_get($scope["#childScope/0"], $scope.upper ? $scope.up : $scope.low), 2);
const $upper = /*@__PURE__*/ _let("upper/5", $upper__OR__up__OR__low);
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
const $up = ($scope) => () => "U" + $scope.input_title;
const $low = ($scope) => () => "l" + $scope.input_title;
_bind_resume("__tests__/template.marko_0/up input_title", $up);
_bind_resume("__tests__/template.marko_0/low input_title", $low);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
