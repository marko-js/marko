// tags/label-view.marko
const $template$1 = "<output> </output>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $get = ($scope, get) => _text($scope["#text/0"], get());
const $input$1 = ($scope, input) => $get($scope, input.get);
var label_view_default = /*@__PURE__*/ _template("__tests__/tags/label-view.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>toggle</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D l");
const $upper__OR__up__OR__low = /*@__PURE__*/ _or(8, ($scope) => $get($scope["#childScope/0"], $scope.upper ? $scope.up : $scope.low), 2);
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
_resumed["__tests__/template.marko_0/up"] = $up;
_resumed["__tests__/template.marko_0/low"] = $low;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
