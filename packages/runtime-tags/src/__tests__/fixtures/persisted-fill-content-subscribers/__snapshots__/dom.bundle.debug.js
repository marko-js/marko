// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l");
const $frame_content2__input_label__OR__b = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko0", "input_label", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_label + ":" + $scope._.b)), () => $frame_content2__input_label, 1);
const $frame_content2__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_label", /*@__PURE__*/ _closure_get("input_label", $frame_content2__input_label__OR__b), 1);
const $frame_content2__setup = ($scope) => {
	$frame_content2__input_label($scope);
	$frame_content2__b($scope);
};
const $frame_content2__b = /*@__PURE__*/ _closure_get("b", $frame_content2__input_label__OR__b);
const $frame_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p class=b> </p>", "D ", $frame_content2__setup);
const $frame_content__input_label__OR__a = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko0", "input_label", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_label + ":" + $scope._.a)), () => $frame_content__input_label, 0);
const $frame_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_label", /*@__PURE__*/ _closure_get("input_label", $frame_content__input_label__OR__a), 0);
const $frame_content__setup = ($scope) => {
	$frame_content__input_label($scope);
	$frame_content__a($scope);
};
const $frame_content__a = /*@__PURE__*/ _closure_get("a", $frame_content__input_label__OR__a);
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p class=a> </p>", "D ", $frame_content__setup);
const $a__closure = /*@__PURE__*/ _closure($frame_content__a);
const $a = /*@__PURE__*/ _let("a/7", $a__closure);
const $b__closure = /*@__PURE__*/ _closure($frame_content2__b);
const $b = /*@__PURE__*/ _let("b/8", $b__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$a($scope, +$scope.a + 1);
	});
	_on($scope["#button/3"], "click", function() {
		$b($scope, +$scope.b + 1);
	});
});
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
	$input_content_direct($scope["#childScope/1"], $frame_content2($scope));
	$a($scope, 0);
	$b($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($frame_content__input_label, $frame_content2__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
