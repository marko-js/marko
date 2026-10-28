// tags/child.marko
const $template$1 = "<!><!><p> </p><button class=t>t</button>";
const $walks$1 = "b%bD l b";
const $if_content__input_a = /*@__PURE__*/ _fill_signal("input_a __tests__/tags/child.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_a)));
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/0", "<i> </i>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill1", "open/8", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $x = ($scope, x) => _text($scope["#text/1"], x);
const $input_a__OR__input_c = /*@__PURE__*/ _fill_signal("input_a | __tests__/tags/child.marko_fill0", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_a#5_input_c#6/init", 7, ($scope) => $x($scope, $scope.input_a + $scope.input_c)));
const $input_a$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", ($scope) => {
	$if_content__input_a($scope);
	$input_a__OR__input_c($scope);
}, /*@__PURE__*/ _fill_mark("input_a", $if_content__input_a));
const $input_c$1 = /*@__PURE__*/ _const("input_c", $input_a__OR__input_c);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_c$1($scope, input.c);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _let("n/7", ($scope) => $input_c$1($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, $scope.n + "k");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$n($scope, "k");
	$setup__script($scope);
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$input_a$1($scope["#childScope/1"], input_a);
};
const $input_c = ($scope, input_c) => $input_c$1($scope["#childScope/1"], input_c);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_c($scope, input.c);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
