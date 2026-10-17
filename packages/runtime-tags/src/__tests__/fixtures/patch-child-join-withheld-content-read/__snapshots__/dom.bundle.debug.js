// tags/child.marko
const $template$1 = "<section></section><!><!>";
const $walks$1 = " b%c";
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _fill_join_value("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/child.marko_2_input_a#0:4_input_b#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b))), "#text/1", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_a__OR__input_b);
const $frag_content__input_a = /*@__PURE__*/ _shell_init("__tests__/tags/child.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _fill_join_closure("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _closure_get("input_a/10", ($scope) => _text($scope["#text/0"], $scope._.input_a), 0, "__tests__/tags/child.marko_1_input_a#0:4/subscribe"), 0), 0));
const $frag_content__setup = $frag_content__input_a;
const $frag_content = _content("__tests__/tags/child.marko_1*content", "<i> </i>", "D ", $frag_content__setup);
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $input_mode__OR__frag_content = /*@__PURE__*/ _shell_or("__tests__/tags/child.marko_0_input_mode#5_frag_content#8/init", 9, ($scope) => _attr_content($scope, "#section/0", $scope.input_mode ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_mode__OR__frag_content);
function $setup$1($scope) {
	$frag($scope, { content: $frag_content($scope) });
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__frag_content);
const $if = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup);
const $input_b = /*@__PURE__*/ _const("input_b", ($scope) => {
	$if($scope, $scope.input_b ? 0 : 1);
	$if_content__input_b($scope);
});
const $input$1 = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", ($scope) => {
	$input_a__closure($scope);
	$if_content__input_a($scope);
}, $input_a__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=m>m</button><button class=n>n</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $m = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "m/8", ($scope) => {
	$input_mode($scope["#childScope/0"], $scope.m);
	$input_mode($scope["#childScope/1"], $scope.m);
});
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "n/9", ($scope) => $input_b($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$m($scope, !$scope.m);
	});
	_on($scope["#button/3"], "click", function() {
		$n($scope, $scope.n + "k");
	});
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
	$m($scope, true);
	$n($scope, "");
}
const $input_x = ($scope, input_x) => {
	$input_a($scope["#childScope/0"], input_x);
	$input_a($scope["#childScope/1"], input_x);
};
const $input_y = ($scope, input_y) => $input_b($scope["#childScope/0"], input_y);
const $input = ($scope, input) => {
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
