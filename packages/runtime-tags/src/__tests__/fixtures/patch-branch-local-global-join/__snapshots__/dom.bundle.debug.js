// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_a__OR__input_b__OR__c = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1 __tests__/tags/child.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill0 __tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:4_input_b#0:5_c#1/init", 2, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b + $scope.c), 2), "#text/0", 0), "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b__OR__c);
const $if_content__c = /*@__PURE__*/ _const("c", $if_content__input_a__OR__input_b__OR__c);
const $if_content__setup__$global_g = /*@__PURE__*/ _fill_global_join("__tests__/tags/child.marko_1_$global_g#0:8", ($scope) => $if_content__c($scope, $scope.$global.g + "!"), "g");
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
	$if_content__setup__$global_g($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b__OR__c);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)("b%c", "b%c");
const $n = _let("n/8", ($scope) => $input_a($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
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
