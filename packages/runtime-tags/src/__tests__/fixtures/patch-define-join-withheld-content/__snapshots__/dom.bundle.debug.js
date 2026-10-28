// tags/child.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $frag_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_a __tests__/tags/child.marko_fill0/unpatched,input_b __tests__/tags/child.marko_fill1/unpatched", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_a#0:3_input_b#0:4/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b)), _closure_subscribers, "input_a/9", 0);
const $frag_content__input_a = /*@__PURE__*/ _closure_get("input_a/9", $frag_content__input_a__OR__input_b, 0, "__tests__/tags/child.marko_1_input_a#0:3/subscribe");
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__input_b($scope);
};
const $frag_content__input_b = /*@__PURE__*/ _closure_get("input_b/10", $frag_content__input_a__OR__input_b, 0, "__tests__/tags/child.marko_1_input_b#0:4/subscribe");
const $frag_content = _content("__tests__/tags/child.marko_1*content", "<em> </em>", "D ", $frag_content__setup);
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $input_mode__OR__frag_content = /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_0_input_mode#5_frag_content#7/init", 8, ($scope) => _attr_content($scope, "#section/0", $scope.input_mode ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_mode__OR__frag_content);
function $setup$1($scope) {
	$frag($scope, { content: $frag_content($scope) });
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__frag_content);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_mode($scope, input.mode);
};
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($frag_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)(" b", " b");
const $n = /*@__PURE__*/ _let("n/8", ($scope) => $input_a($scope["#childScope/0"], $scope.n));
const $m = /*@__PURE__*/ _let("m/9", ($scope) => {
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
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$n($scope, 0);
	$m($scope, false);
	$setup__script($scope);
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
