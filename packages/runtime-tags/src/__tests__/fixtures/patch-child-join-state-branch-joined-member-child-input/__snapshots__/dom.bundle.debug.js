// tags/cell.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_v = ($scope, input_v) => _text($scope["#text/0"], input_v);
const $input$2 = ($scope, input) => $input_v($scope, input.v);
var cell_default = /*@__PURE__*/ _template("__tests__/tags/cell.marko", $template$2, "D l", 0, $input$2);

// tags/child.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)("D l");
const $setup$1 = ($_) => {};
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/child.marko_1_input_a#0:4_input_b#0:8/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), "#text/0", 0), "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $c = ($scope, c) => $input_v($scope["#childScope/1"], c);
const $input_a__OR__input_d = /*@__PURE__*/ _patch_or("__tests__/tags/child.marko_0_input_a#4_input_d#5/init", 6, ($scope) => $c($scope, $scope.input_a + "-" + $scope.input_d));
const $input_a$1 = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a__OR__input_d($scope);
	$if_content__input_a($scope);
});
const $input_d = /*@__PURE__*/ _const("input_d", $input_a__OR__input_d);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_d($scope, input.d);
	$input_show$1($scope, input.show);
	$input_b$1($scope, input.b);
};
const $input_b$1 = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/9", ($scope) => {
	$input_b$1($scope["#childScope/0"], $scope.n);
	$input_d($scope["#childScope/0"], $scope.n);
});
const $s = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "s/10", ($scope) => $input_show$1($scope["#childScope/0"], $scope.s));
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
const $input_b = ($scope, input_b) => {
	$input_b$1($scope["#childScope/1"], input_b);
	$input_d($scope["#childScope/1"], input_b);
};
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
