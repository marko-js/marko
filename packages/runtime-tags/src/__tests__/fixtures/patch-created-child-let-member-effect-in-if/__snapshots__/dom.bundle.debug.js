// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__value_b__script = _script("__tests__/tags/child.marko_1_value_b#0:6", ($scope) => _el_read($scope["#div/0"]).textContent += $scope._.value_b);
const $if_content__value_b = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_1_value_b#0:6/setup", "#text/0", 0, $if_content__value_b__script);
const $if_content__setup$1 = $if_content__value_b;
const $value = _let("value/5", ($scope) => $value_b($scope, $scope.value?.b));
const $value_b = /*@__PURE__*/ _const("value_b", $if_content__value_b);
const $input_data = $value;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup$1);
const $input_on = ($scope, input_on) => $if$1($scope, input_on ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_data($scope, input.data);
	$input_on($scope, input.on);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<button class=inc> </button><!><!>";
const $walks = " D l%c";
const $if_content__count = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_count#0:6/setup", "#text/2", 0, ($scope) => $input_data($scope["#childScope/0"], { b: $scope._.count }));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$input_on($scope["#childScope/0"], true);
};
const $count = _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
