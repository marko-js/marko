// tags/child.marko
const $template$1 = "<!><!><div></div>";
const $walks$1 = "b%b b";
const $setup$1 = ($_) => {};
const $if_content__input_a__OR__c = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1/unpatched", "input_a", /*@__PURE__*/ _shell_or("__tests__/tags/child.marko_1_input_a#0:6_c#1/init", 2, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope.c)), "#text/0", 0);
const $if_content__c = /*@__PURE__*/ _const("c", $if_content__input_a__OR__c);
const $if_content__input_b = /*@__PURE__*/ _shell_init("__tests__/tags/child.marko_1_input_b#0:5/init", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_b", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__c($scope, $scope._.input_b + "!"))));
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__input_a._($scope);
};
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__c);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_a__script = _script("__tests__/tags/child.marko_0_input_a#6", ($scope) => _el_read($scope["#div/1"]).textContent = "s:" + $scope.input_a);
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a__script($scope);
	$if_content__input_a($scope);
});
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_show$1($scope, input.show);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", $if_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/8", ($scope) => $input_a($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
const $input_x = ($scope, input_x) => {
	$input_b($scope["#childScope/0"], input_x);
	$input_b($scope["#childScope/1"], input_x);
};
const $input_show = ($scope, input_show) => {
	$input_show$1($scope["#childScope/0"], input_show);
	$input_show$1($scope["#childScope/1"], input_show);
};
const $input_y = ($scope, input_y) => $input_a($scope["#childScope/1"], input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_show($scope, input.show);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
