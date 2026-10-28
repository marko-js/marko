// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<!><!><button class=a>a</button><button class=b>b</button>";
const $walks = "b%b b b";
const $frame_content2__input_label__OR__b = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/template.marko_3_input_label#0:6_b#0:8/init", 2, ($scope) => _text($scope["#text/1"], $scope._._.input_label + ":" + $scope._._.b)), "input_label/9", 1);
const $frame_content2__input_label = _closure_resume("__tests__/template.marko_3_input_label#0:6/subscribe", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_label/9", $frame_content2__input_label__OR__b, ($scope) => $scope._._)));
const $frame_content2__setup = ($scope) => {
	$frame_content2__input_label($scope);
	$frame_content2__b($scope);
};
const $frame_content2__b = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_b#0:8/init", /*@__PURE__*/ _closure_get("b/11", ($scope) => {
	_text($scope["#text/0"], $scope._._.b);
	$frame_content2__input_label__OR__b($scope);
}, ($scope) => $scope._._));
const $frame_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<p class=b><!> <!></p>", "D%c%", $frame_content2__setup);
const $frame_content__input_label__OR__a = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or_resume("__tests__/template.marko_2_input_label#0:6_a#0:7/init", 1, ($scope) => _text($scope["#text/0"], $scope._._.input_label + ":" + $scope._._.a)), "input_label/9", 0);
const $frame_content__input_label = _closure_resume("__tests__/template.marko_2_input_label#0:6/subscribe", /*@__PURE__*/ _closure_get("input_label/9", $frame_content__input_label__OR__a, ($scope) => $scope._._));
const $frame_content__setup = ($scope) => {
	$frame_content__input_label($scope);
	$frame_content__a($scope);
};
const $frame_content__a = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_a#0:7/init", /*@__PURE__*/ _closure_get("a/10", $frame_content__input_label__OR__a, ($scope) => $scope._._));
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p class=a> </p>", "D ", $frame_content__setup);
const $if_content__setup = ($scope) => {
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
	$input_content_direct($scope["#childScope/1"], $frame_content2($scope));
};
const $a__closure = /*@__PURE__*/ _closure($frame_content__a);
const $a = /*@__PURE__*/ _let("a/7", $a__closure);
const $b__closure = /*@__PURE__*/ _closure($frame_content2__b);
const $b = /*@__PURE__*/ _let("b/8", $b__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$a($scope, +$scope.a + 1);
	});
	_on($scope["#button/2"], "click", function() {
		$b($scope, $scope.b + 10);
	});
});
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}</main>`)($template$1, $template$1), /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}&l`)("D%l", "D%l"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($frame_content__input_label, $frame_content2__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
