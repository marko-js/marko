// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__value = _fill_let_resume("__tests__/tags/child.marko_1_value#1/fill", "value/1", ($scope) => $if_content__value_b($scope, $scope.value?.b));
const $if_content__input_data = /*@__PURE__*/ _if_closure_patch("__tests__/tags/child.marko_1_input_data#0:4/setup", "#text/0", 0, ($scope) => $if_content__value($scope, $scope._.input_data));
const $if_content__setup = $if_content__input_data;
const $if_content__value_b__script = _script("__tests__/tags/child.marko_1_value_b#2", ($scope) => _el_read($scope["#div/0"]).textContent += $scope.value_b);
const $if_content__value_b = /*@__PURE__*/ _const("value_b", $if_content__value_b__script);
const $if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_data($scope, input.data);
	$input_show$1($scope, input.show);
};
const $input_data = /*@__PURE__*/ _const("input_data", $if_content__input_data);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=inc> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
const $count = _let("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$input_data($scope["#childScope/2"], { b: $scope.count });
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/2"], input_show);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
