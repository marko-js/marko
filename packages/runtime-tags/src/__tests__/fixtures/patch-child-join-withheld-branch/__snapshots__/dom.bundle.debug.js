// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $frag_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/child.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/child.marko_2_input_a#0:4_input_b#0:5/init", 1, ($scope) => _text($scope["#text/0"], $scope._._.input_a + $scope._._.input_b)), "input_a/7", 0), "input_b/8", 0);
const $frag_content__input_a = _closure_resume("__tests__/tags/child.marko_2_input_a#0:4/subscribe", /*@__PURE__*/ _closure_get("input_a/7", $frag_content__input_a__OR__input_b, ($scope) => $scope._._));
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__input_b($scope);
};
const $frag_content__input_b = _closure_resume("__tests__/tags/child.marko_2_input_b#0:5/subscribe", /*@__PURE__*/ _closure_get("input_b/8", $frag_content__input_a__OR__input_b, ($scope) => $scope._._));
const $frag_content = _content("__tests__/tags/child.marko_2*content", "<em> </em>", "D ", $frag_content__setup);
const $if_content__input_mode__OR__frag_content = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill2", "input_mode", /*@__PURE__*/ _shell_or("__tests__/tags/child.marko_1_input_mode#0:6_frag_content#2/init", 3, ($scope) => _attr_content($scope, "#section/0", $scope._.input_mode ? $scope.frag_content : null)), "#text/0", 0);
const $if_content__input_mode = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_mode__OR__frag_content);
const $if_content__frag = ($scope, frag) => $if_content__frag_content($scope, frag?.content);
const $if_content__setup = ($scope) => {
	$if_content__input_mode._($scope);
	$if_content__frag($scope, { content: $frag_content($scope) });
};
const $if_content__frag_content = /*@__PURE__*/ _const("frag_content", $if_content__input_mode__OR__frag_content);
const $if = /*@__PURE__*/ _if("#text/0", "<section></section>", " ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_mode($scope, input.mode);
};
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($frag_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
const $input_mode = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill2", "input_mode", $if_content__input_mode);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/9", ($scope) => $input_a($scope["#childScope/0"], $scope.n));
const $m = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "m/10", ($scope) => {
	$input_mode($scope["#childScope/0"], $scope.m);
	$input_mode($scope["#childScope/1"], $scope.m);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$n($scope, +$scope.n + 1);
	});
	_on($scope["#button/3"], "click", function() {
		$m($scope, !$scope.m);
	});
});
function $setup($scope) {
	$setup__script($scope);
	$n($scope, 0);
	$m($scope, false);
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
