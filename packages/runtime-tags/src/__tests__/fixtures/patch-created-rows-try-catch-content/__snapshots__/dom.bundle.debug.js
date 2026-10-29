// tags/card.marko
const $template$3 = "<section><!></section>";
const $walks$3 = "D%l";
const $setup$3 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag$1;
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$3, "D%l", 0, $input$2);

// tags/thrower.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
function $setup$2($scope) {
	$dynamicTag($scope, (() => {
		throw new Error("probe");
	})());
}
var thrower_default = /*@__PURE__*/ _template("__tests__/tags/thrower.marko", $template$2, "b%c", $setup$2);

// tags/outer.marko
const $template$1 = "<button>x</button><!><!>";
const $walks$1 = " b%c";
const $try_content__setup = ($scope) => $setup$2($scope["#childScope/0"]);
const $catch_content__entry = /*@__PURE__*/ _closure_get("entry/3", ($scope) => $input_content$1($scope["#childScope/0"], $scope._.entry), 0, "__tests__/tags/outer.marko_2_entry#1:2/subscribe");
const $catch_content__setup = $catch_content__entry;
const $catch_content = _content("__tests__/tags/outer.marko_2*content", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $catch_content__setup);
const $for_content__try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for_content__$params = ($scope, $params2) => $for_content__entry($scope, $params2[0]);
const $for_content__entry__closure = /*@__PURE__*/ _closure($catch_content__entry);
const $for_content__entry = /*@__PURE__*/ _const("entry", $for_content__entry__closure);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill0", "rows/5", ($scope) => $for($scope, [$scope.rows]));
const $input_content = ($scope, input_content) => $rows($scope, [input_content]);
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$rows($scope, []);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<h1>Rows whose catch keeps content</h1><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $outer_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe"), 0));
const $outer_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content("__tests__/template.marko_2*content", "<input><label> </label>", " b D ", $outer_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($outer_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
