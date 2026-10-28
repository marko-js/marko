// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $template$1 = "<!><!><!><button class=t>t</button>";
const $walks$1 = "b%b%b b";
const $if_content2__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Info_content__setup($scope["#childScope/0"]);
};
const $if_content__input_a__script = _script("__tests__/tags/panel.marko_2_input_a#0:5", ($scope) => _el_read($scope["#div/0"]).textContent = "s:" + $scope._.input_a);
const $if_content__input_a = /*@__PURE__*/ _fill_join("__tests__/tags/panel.marko_fill0 __tests__/tags/panel.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_a__script));
const $if_content__setup = $if_content__input_a;
const $Info_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill0/unpatched | __tests__/tags/panel.marko_fill0", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/panel.marko_1_input_a#0:5_input_b#0:6/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + ":" + $scope._.input_b)), "input_a/9", 0), "input_b/10", 0);
const $Info_content__input_a = /*@__PURE__*/ _closure_get("input_a/9", $Info_content__input_a__OR__input_b, 0, "__tests__/tags/panel.marko_1_input_a#0:5/subscribe");
const $Info_content__setup = ($scope) => {
	$Info_content__input_a($scope);
	$Info_content__input_b($scope);
};
const $Info_content__input_b = /*@__PURE__*/ _closure_get("input_b/10", $Info_content__input_a__OR__input_b, 0, "__tests__/tags/panel.marko_1_input_b#0:6/subscribe");
const $if2 = /*@__PURE__*/ _if("#text/1", "<div></div>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/panel.marko_fill2", "open/8", ($scope) => $if2($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$open($scope, true);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $if_content2__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b$1($scope, input.b);
	$input_show$1($scope, input.show);
};
const $input_a__closure = /*@__PURE__*/ _closure($Info_content__input_a);
const $input_a$1 = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_a", ($scope) => {
	$input_a__closure($scope);
	$if_content__input_a($scope);
}, /*@__PURE__*/ _fill_mark("input_a", ($scope) => {
	$input_a__closure($scope);
	$if_content__input_a($scope);
}));
const $input_b__closure = /*@__PURE__*/ _closure($Info_content__input_b);
const $input_b$1 = /*@__PURE__*/ _const("input_b", $input_b__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks$1, $walks$1);
const $n = /*@__PURE__*/ _let("n/9", ($scope) => $input_b$1($scope["#childScope/0"], $scope.n));
const $s = /*@__PURE__*/ _let("s/10", ($scope) => $input_show$1($scope["#childScope/0"], $scope.s));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$n($scope, $scope.n + "k");
	});
	_on($scope["#button/3"], "click", function() {
		$s($scope, !$scope.s);
	});
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
	$n($scope, "k");
	$s($scope, true);
	$setup__script($scope);
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
