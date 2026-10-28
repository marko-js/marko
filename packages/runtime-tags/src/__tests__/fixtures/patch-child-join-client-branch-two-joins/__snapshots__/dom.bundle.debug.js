// tags/child.marko
const $template$1 = "<!><!><em> </em>";
const $walks$1 = "b%bD l";
const $setup$1 = ($_) => {};
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_a __tests__/tags/child.marko_fill0/unpatched,input_b __tests__/tags/child.marko_fill1/unpatched", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:5_input_b#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), _if_closure, "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input_a__OR__input_c = /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_a#5_input_c#7/init", 8, ($scope) => _text($scope["#text/1"], $scope.input_a + $scope.input_c));
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a__OR__input_c($scope);
	$if_content__input_a($scope);
});
const $input_c$1 = /*@__PURE__*/ _const("input_c", $input_a__OR__input_c);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
	$input_c$1($scope, input.c);
};
const $input_b$1 = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _let("n/9", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $s = /*@__PURE__*/ _let("s/10", ($scope) => {
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
const $input_c = ($scope, input_c) => {
	$input_c$1($scope["#childScope/0"], input_c);
	$input_c$1($scope["#childScope/1"], input_c);
};
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/1"], input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_c($scope, input.c);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
