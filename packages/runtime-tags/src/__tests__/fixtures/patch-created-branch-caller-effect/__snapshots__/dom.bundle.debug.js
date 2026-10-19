// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_count__script = _script("__tests__/tags/child.marko_1_input_count#0:4", ($scope) => console.log("count", $scope._.input_count));
const $if_content__input_count = /*@__PURE__*/ _shell_init("__tests__/tags/child.marko_1_input_count#0:4/init", /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_count__script));
const $if_content__setup = $if_content__input_count;
const $if = /*@__PURE__*/ _if("#text/0", "<p>shown</p>", 0, $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_count$1($scope, input.count);
	$input_show$1($scope, input.show);
};
const $input_count$1 = /*@__PURE__*/ _const("input_count", $if_content__input_count);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/8", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_count$1($scope["#childScope/2"], $scope.count);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_show = ($scope, input_show) => {
	$input_show$1($scope["#childScope/2"], input_show);
	$input_show$1($scope["#childScope/3"], input_show);
};
const $input_count = ($scope, input_count) => $input_count$1($scope["#childScope/3"], input_count);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_count($scope, input.count);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
