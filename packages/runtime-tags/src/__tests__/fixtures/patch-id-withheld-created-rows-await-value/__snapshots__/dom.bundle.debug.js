// tags/card.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D%l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<button>x</button><!><!>";
const $walks$1 = " b%c";
const $if_content__entry = /*@__PURE__*/ _closure_get("entry/8", ($scope) => $input_content$1($scope["#childScope/0"], $scope._._.entry), ($scope) => $scope._._, "__tests__/tags/outer.marko_3_entry#1:2/subscribe");
const $if_content__setup$1 = $if_content__entry;
const $await_content__if = /*@__PURE__*/ _if("#text/0", $template$2, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup$1);
const $await_content__v = ($scope, v) => $await_content__if($scope, v ? 0 : 1);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%");
const $for_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $for_content__input_promise = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_promise", /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__await_promise($scope, $scope._.input_promise)));
const $for_content__setup = ($scope) => {
	$for_content__input_promise._($scope);
	$await_content($scope);
};
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry__closure = /*@__PURE__*/ _closure($if_content__entry);
const $for_content__entry = /*@__PURE__*/ _const("entry", $for_content__entry__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill1", "rows/6", ($scope) => $for($scope, [$scope.rows]));
const $input_content = ($scope, input_content) => $rows($scope, [input_content]);
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, []);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => {
	$input_content($scope, input.content);
	$input_promise$1($scope, input.promise);
};
const $input_promise$1 = /*@__PURE__*/ _fill_const("__tests__/tags/outer.marko_fill0", "input_promise", $for_content__input_promise);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<h1>Rows that wait on a value</h1><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe"), 0));
const $outer_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $outer_content__setup);
const $if_content__input_promise = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_promise#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_promise", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise))));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_promise($scope, input.promise);
	$input_label($scope, input.label);
};
const $input_promise = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_promise", $if_content__input_promise);
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
