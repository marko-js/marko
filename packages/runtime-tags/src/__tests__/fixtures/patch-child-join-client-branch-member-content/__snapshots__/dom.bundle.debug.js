// tags/child.marko
const $template$1 = "<!><!><section></section>";
const $walks$1 = "b%b b";
const $frag_content__input_a = /*@__PURE__*/ _shell_init("__tests__/tags/child.marko_2_input_a#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _fill_join_closure("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _closure_get("input_a/11", ($scope) => _text($scope["#text/0"], $scope._.input_a), 0, "__tests__/tags/child.marko_2_input_a#0:5/subscribe"), 0), 0));
const $frag_content__setup = $frag_content__input_a;
const $frag_content = _content("__tests__/tags/child.marko_2*content", "<em> </em>", "D ", $frag_content__setup);
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_if("__tests__/tags/child.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _fill_join_value("__tests__/tags/child.marko_fill0", "input_a", /*@__PURE__*/ _patch_or("__tests__/tags/child.marko_1_input_a#0:5_input_b#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + $scope._.input_b))), "#text/0", 0), "#text/0", 0);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__input_b._($scope);
};
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_a__OR__input_b);
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $frag = ($scope, frag) => $frag_content2($scope, frag?.content);
const $input_mode__OR__frag_content = /*@__PURE__*/ _shell_or("__tests__/tags/child.marko_0_input_mode#7_frag_content#9/init", 10, ($scope) => _attr_content($scope, "#section/1", $scope.input_mode ? $scope.frag_content : null));
const $frag_content2 = /*@__PURE__*/ _const("frag_content", $input_mode__OR__frag_content);
function $setup$1($scope) {
	$frag($scope, { content: $frag_content($scope) });
}
const $input_mode = /*@__PURE__*/ _const("input_mode", $input_mode__OR__frag_content);
const $input$1 = ($scope, input) => {
	$input_mode($scope, input.mode);
	$input_show$1($scope, input.show);
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a$1 = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_a", ($scope) => {
	$input_a__closure($scope);
	$if_content__input_a($scope);
}, $input_a__closure);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/10", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $s = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "s/11", ($scope) => $input_show$1($scope["#childScope/0"], $scope.s));
const $m = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "m/12", ($scope) => {
	$input_mode($scope["#childScope/0"], $scope.m);
	$input_mode($scope["#childScope/1"], $scope.m);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$n($scope, $scope.n + "k");
	});
	_on($scope["#button/3"], "click", function() {
		$m($scope, !$scope.m);
	});
	_on($scope["#button/4"], "click", function() {
		$s($scope, !$scope.s);
	});
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
	$n($scope, "k");
	$s($scope, true);
	$m($scope, true);
}
const $input_a = ($scope, input_a) => {
	$input_a$1($scope["#childScope/0"], input_a);
	$input_a$1($scope["#childScope/1"], input_a);
};
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/1"], input_b);
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/1"], input_show);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_show($scope, input.show);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
