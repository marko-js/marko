// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("__tests__/tags/panel.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_if("__tests__/tags/panel.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/panel.marko_1_input_a#0:4_input_b#0:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + ":" + $scope._.input_b)), "#text/0", 0), "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/8", ($scope) => $input_a($scope["#childScope/0"], $scope.count));
const $s = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "s/9", ($scope) => {
	$input_show($scope["#childScope/0"], $scope.s);
	$input_show($scope["#childScope/1"], $scope.s);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$count($scope, +$scope.count + 1);
	});
	_on($scope["#button/3"], "click", function() {
		$s($scope, !$scope.s);
	});
});
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
	$s($scope, false);
}
const $input_x = ($scope, input_x) => {
	$input_b($scope["#childScope/0"], input_x);
	$input_b($scope["#childScope/1"], input_x);
};
const $input_y = ($scope, input_y) => $input_a($scope["#childScope/1"], input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
