// tags/panel.marko
const $Info_content__walks = "D l";
const $Info_content__template = "<p> </p>";
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Info_content__setup($scope["#childScope/0"]);
};
const $Info_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill1/unpatched", "input_b", /*@__PURE__*/ _fill_join_subscribers("__tests__/tags/panel.marko_fill0/unpatched", "input_a", /*@__PURE__*/ _or_resume("__tests__/tags/panel.marko_1_input_a#0:3_input_b#0:4/init", 1, ($scope) => _text($scope["#text/0"], $scope._.input_a + ":" + $scope._.input_b)), "input_a/6", 0), "input_b/7", 0);
const $Info_content__input_a = /*@__PURE__*/ _closure_get("input_a/6", $Info_content__input_a__OR__input_b, 0, "__tests__/tags/panel.marko_1_input_a#0:3/subscribe");
const $Info_content__setup = ($scope) => {
	$Info_content__input_a($scope);
	$Info_content__input_b($scope);
};
const $Info_content__input_b = /*@__PURE__*/ _closure_get("input_b/7", $Info_content__input_a__OR__input_b, 0, "__tests__/tags/panel.marko_1_input_b#0:4/subscribe");
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Info_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Info_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_show($scope, input.show);
};
const $input_a__closure = /*@__PURE__*/ _closure($Info_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b__closure = /*@__PURE__*/ _closure($Info_content__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_b__closure);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button class=c>+</button><button class=s>s</button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)("b%c", "b%c");
const $count = _let("count/8", ($scope) => $input_a($scope["#childScope/0"], $scope.count));
const $s = _let("s/9", ($scope) => {
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
	$count($scope, 0);
	$s($scope, false);
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
