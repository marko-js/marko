// tags/keep.marko
const $template$1 = "<button class=reset>reset</button><div><!></div>";
const $walks$1 = " bD%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = /*@__PURE__*/ _const("input_content", ($scope) => $c($scope, $scope.input_content));
const $setup__script = _script("__tests__/tags/keep.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, $scope.input_content);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var keep_default = /*@__PURE__*/ _template("__tests__/tags/keep.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $keep_content__input_note = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_note#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_note", /*@__PURE__*/ _closure_get("input_note/5", ($scope) => _text($scope["#text/1"], $scope._._.input_note), ($scope) => $scope._._, "__tests__/template.marko_2_input_note#0:4/subscribe"), 0));
const $keep_content__setup = ($scope) => {
	$keep_content__input_note($scope);
	$keep_content__b($scope);
};
const $keep_content__b = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_b#1:2/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "b", /*@__PURE__*/ _closure_get("b/6", ($scope) => _text($scope["#text/0"], $scope._.b), 0, "__tests__/template.marko_2_b#1:2/subscribe"), 0));
const $keep_content = _content("__tests__/template.marko_2*content", "<!>:<!>", "%c%", $keep_content__setup);
const $for_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $keep_content($scope));
};
const $for_content__$params = ($scope, $params2) => $for_content__b($scope, $params2[0]);
const $for_content__b__closure = /*@__PURE__*/ _closure($keep_content__b);
const $for_content__b = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "b", $for_content__b__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup, $for_content__$params);
const $input_bs = ($scope, input_bs) => $for($scope, [input_bs]);
const $input = ($scope, input) => {
	$input_bs($scope, input.bs);
	$input_note($scope, input.note);
};
const $input_note__closure = /*@__PURE__*/ _closure($keep_content__input_note);
const $input_note = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_note", $input_note__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
