// tags/view.marko
const $template$2 = "<!><!><span> </span>";
const $walks$2 = "b%bD l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input_title$2 = ($scope, input_title) => _text($scope["#text/1"], input_title);
const $input$2 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_title$2($scope, input.title);
};
var view_default = /*@__PURE__*/ _template("__tests__/tags/view.marko", $template$2, $walks$2, 0, $input$2);

// tags/pick.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$2);
const $setup$1 = ($_) => {};
const $input_on__OR__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("input_on __tests__/tags/pick.marko_fill0,input_a __tests__/tags/pick.marko_fill1,input_b __tests__/tags/pick.marko_fill2", /*@__PURE__*/ _or_resume("__tests__/tags/pick.marko_0_input_on#3_input_a#4_input_b#5/init", 6, ($scope) => $input_content($scope["#childScope/0"], $scope.input_on ? $scope.input_a : $scope.input_b), 2));
const $input_on$1 = /*@__PURE__*/ _const("input_on", $input_on__OR__input_a__OR__input_b);
const $input_a = /*@__PURE__*/ _const("input_a", $input_on__OR__input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_on__OR__input_a__OR__input_b);
const $input_title$1 = ($scope, input_title) => $input_title$2($scope["#childScope/0"], input_title);
const $input$1 = ($scope, input) => {
	$input_on$1($scope, input.on);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
	$input_title$1($scope, input.title);
};
var pick_default = /*@__PURE__*/ _template("__tests__/tags/pick.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>s</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $b_content__s = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_s#0:7/init", /*@__PURE__*/ _closure_get("s/9", ($scope) => _text($scope["#text/0"], $scope._.s)));
const $b_content__setup = $b_content__s;
const $b_content = _content("__tests__/template.marko_2*content", "B<!>", "b%", $b_content__setup);
const $a_content__input_x = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_x#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_x", /*@__PURE__*/ _closure_get("input_x/8", ($scope) => _text($scope["#text/0"], $scope._.input_x), 0, "__tests__/template.marko_1_input_x#0:5/subscribe"), 0));
const $a_content__setup = $a_content__input_x;
const $a_content = _content("__tests__/template.marko_1*content", "A<!>", "b%", $a_content__setup);
const $s__closure = /*@__PURE__*/ _closure($b_content__s);
const $s = /*@__PURE__*/ _let("s/7", $s__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$input_a($scope["#childScope/1"], attrTag({ content: $a_content($scope) }));
	$input_b($scope["#childScope/1"], attrTag({ content: $b_content($scope) }));
	$s($scope, 0);
	$setup__script($scope);
}
const $input_on = ($scope, input_on) => $input_on$1($scope["#childScope/1"], input_on);
const $input_title = ($scope, input_title) => $input_title$1($scope["#childScope/1"], input_title);
const $input = ($scope, input) => {
	$input_on($scope, input.on);
	$input_x($scope, input.x);
	$input_title($scope, input.title);
};
const $input_x__closure = /*@__PURE__*/ _closure($a_content__input_x);
const $input_x = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
