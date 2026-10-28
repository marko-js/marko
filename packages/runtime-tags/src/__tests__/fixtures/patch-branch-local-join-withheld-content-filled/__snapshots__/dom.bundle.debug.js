// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $frag_content__input_a__OR__c = /*@__PURE__*/ _fill_signal("c __tests__/tags/child.marko_fill3/unpatched | __tests__/tags/child.marko_fill3", /*@__PURE__*/ _fill_signal("input_a __tests__/tags/child.marko_fill1/unpatched", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_2_input_a#0:5_c#1:1/init", 2, ($scope) => _text($scope["#text/0"], $scope._._.input_a + $scope._.c)), _closure_subscribers, "input_a/8", 0), _closure_subscribers, "c/10", 0);
const $frag_content__input_a = /*@__PURE__*/ _closure_get("input_a/8", $frag_content__input_a__OR__c, ($scope) => $scope._._, "__tests__/tags/child.marko_2_input_a#0:5/subscribe");
const $frag_content__setup = ($scope) => {
	$frag_content__input_a($scope);
	$frag_content__c($scope);
};
const $frag_content__c = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_2_c#1:1/init", /*@__PURE__*/ _fill_closure("__tests__/tags/child.marko_fill3 __tests__/tags/child.marko_fill3/unpatched", "c", /*@__PURE__*/ _closure_get("c/10", ($scope) => {
	_text($scope["#text/1"], $scope._.c);
	$frag_content__input_a__OR__c($scope);
}, 0, "__tests__/tags/child.marko_2_c#1:1/subscribe"), 0));
const $frag_content = _content("__tests__/tags/child.marko_2*content", "<em> </em><i> </i>", "D lD ", $frag_content__setup);
const $if_content__c__closure = /*@__PURE__*/ _closure($frag_content__c);
const $if_content__c = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill3", "c", $if_content__c__closure);
const $if_content__input_b = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_input_b#0:4/init", /*@__PURE__*/ _fill_signal("input_b __tests__/tags/child.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__c($scope, $scope._.input_b + "!"))));
const $if_content__frag = ($scope, frag) => $if_content__frag_content($scope, frag?.content);
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__input_mode._($scope);
	$if_content__frag($scope, { content: $frag_content($scope) });
};
const $if_content__input_mode__OR__frag_content = /*@__PURE__*/ _fill_signal("input_mode __tests__/tags/child.marko_fill2", /*@__PURE__*/ _or_resume("__tests__/tags/child.marko_1_input_mode#0:6_frag_content#3/init", 4, ($scope) => _attr_content($scope, "#section/0", $scope._.input_mode ? $scope.frag_content : null)), _if_closure, "#text/0", 0);
const $if_content__input_mode = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_mode__OR__frag_content);
const $if_content__frag_content = /*@__PURE__*/ _const("frag_content", $if_content__input_mode__OR__frag_content);
const $if = /*@__PURE__*/ _if("#text/0", "<section></section>", " ", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_b($scope, input.b);
	$input_a($scope, input.a);
	$input_mode($scope, input.mode);
};
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_b", $if_content__input_b);
const $input_a__closure = /*@__PURE__*/ _closure($frag_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_mode = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill2", "input_mode", $if_content__input_mode);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
const $n = /*@__PURE__*/ _let("n/9", ($scope) => $input_a($scope["#childScope/0"], $scope.n));
const $m = /*@__PURE__*/ _let("m/10", ($scope) => {
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
	$n($scope, 0);
	$m($scope, false);
	$setup__script($scope);
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
