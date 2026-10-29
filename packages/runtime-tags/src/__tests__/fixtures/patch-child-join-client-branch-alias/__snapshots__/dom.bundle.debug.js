// tags/child.marko
const $template$1 = "<em> </em><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = ($_) => {};
const $if_content__input_b__OR__input_a = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill0 __tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1 __tests__/tags/child.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_b#0:6_a#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), "#text/1", 0), "#text/1", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_b__OR__input_a);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_b__OR__input_a);
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => {
	_text($scope["#text/0"], $scope.input_a);
	$if_content__input_a($scope);
});
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_show($scope, input.show);
	$input_b$1($scope, input.b);
};
const $input_b$1 = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $n = _let("n/8", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $s = _let("s/9", ($scope) => {
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
	$n($scope, "k");
	$s($scope, true);
	$setup__script($scope);
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
