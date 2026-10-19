// tags/child.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = ($_) => {};
const $if_content__input_a = /*@__PURE__*/ _shell_init("__tests__/tags/child.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_a))));
const $if_content__setup = $if_content__input_a;
const $input_a__OR__input_b = /*@__PURE__*/ _fill_join("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/child.marko_0_input_a#4_input_b#5/init", 6, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b)), () => () => {});
const $input_a$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", ($scope) => {
	$if_content__input_a($scope);
	$input_a__OR__input_b($scope);
}, $if_content__input_a);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $if = /*@__PURE__*/ _if("#text/1", "<em> </em>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
	$input_show($scope, input.show);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/8", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $s = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "s/9", ($scope) => {
	$input_show($scope["#childScope/0"], $scope.s);
	$input_show($scope["#childScope/1"], $scope.s);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$n($scope, $scope.n + "k");
	});
	_on($scope["#button/3"], "click", function() {
		$s($scope, !$scope.s);
	});
});
function $setup($scope) {
	$setup__script($scope);
	$n($scope, "k");
	$s($scope, true);
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$input_a$1($scope["#childScope/1"], input_a);
};
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/1"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
