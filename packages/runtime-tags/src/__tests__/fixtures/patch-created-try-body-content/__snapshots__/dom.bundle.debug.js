// tags/wrapper.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $try_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/wrapper.marko_2_input_content#0:3/init", /*@__PURE__*/ _closure_index(1, /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $try_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/wrapper.marko_2_input_content#0:3/subscribe")));
const $try_content__setup = ($scope) => {
	$try_content__input_content($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _init_resume("__tests__/tags/wrapper.marko_2_input_fail#0:4/init", /*@__PURE__*/ _closure_get("input_fail/6", ($scope) => _text($scope["#text/0"], $scope._.input_fail ? boom() : "ok"), 0, "__tests__/tags/wrapper.marko_2_input_fail#0:4/subscribe"));
const $catch_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $catch_content__input_content = /*@__PURE__*/ _fill_join_closure("__tests__/tags/wrapper.marko_fill0", "input_content", /*@__PURE__*/ _closure_get("input_content/5", ($scope) => $catch_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/wrapper.marko_1_input_content#0:3/subscribe"), 0);
const $catch_content__setup = $catch_content__input_content;
const $catch_content = _content("__tests__/tags/wrapper.marko_1*content", "<!><!><!>", "b%", $catch_content__setup);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p><!><!>", "D l%", $try_content__setup, 0, $catch_content);
function $setup$1($scope) {
	$try($scope);
}
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_fail($scope, input.fail);
};
const $input_content__closure = /*@__PURE__*/ _closure($catch_content__input_content, $try_content__input_content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrapper.marko_fill0", "input_content", $input_content__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _const("input_fail", $input_fail__closure);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "b%c", $setup$1, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $if_content__input_alt__OR__A__OR__B = /*@__PURE__*/ _fill_join_if("__tests__/template.marko_fill1", "input_alt", /*@__PURE__*/ _or_resume("__tests__/template.marko_3_input_alt#0:7_A#0:9_B#0:10/init", 1, ($scope) => $input_content($scope["#childScope/0"], $scope._.input_alt ? $scope._.A : $scope._.B), 2), "#text/2", 0);
const $if_content__input_alt = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__input_alt__OR__A__OR__B);
const $if_content__setup = ($scope) => {
	$if_content__input_alt._($scope);
	$if_content__count._($scope);
	$if_content__A._($scope);
	$if_content__B._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_count#0:8/init", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $input_fail($scope["#childScope/0"], $scope._.count > 1)));
const $if_content__A = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__input_alt__OR__A__OR__B);
const $if_content__B = /*@__PURE__*/ _if_closure("#text/2", 0, $if_content__input_alt__OR__A__OR__B);
const $B_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/11", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_2_input_label#0:5/subscribe"), 1));
const $B_content__setup = $B_content__input_label;
const $B_content = _content("__tests__/template.marko_2*content", "<i>B <!></i>", "Db%", $B_content__setup);
const $A_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/11", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe"), 0));
const $A_content__setup = $A_content__input_label;
const $A_content = _content("__tests__/template.marko_1*content", "<em>A <!></em>", "Db%", $A_content__setup);
const $count = /*@__PURE__*/ _let("count/8", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $A = /*@__PURE__*/ _const("A");
const $B = /*@__PURE__*/ _const("B");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
	$input_alt($scope, input.alt);
};
const $input_label__closure = /*@__PURE__*/ _closure($A_content__input_label, $B_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_alt = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_alt", $if_content__input_alt);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
