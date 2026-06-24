// tags/inner.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content$1 = $dynamicTag;
const $input$1 = ($scope, input) => $input_content$1($scope, input.content);
var inner_default = /*@__PURE__*/ _template("__tests__/tags/inner.marko", $template$2, "b%c", $setup$2, $input$1);

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $inner_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $inner_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $inner_content__dynamicTag($scope, $scope._.input_content));
const $inner_content__setup__script = _script("__tests__/tags/outer.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	this.doThing();
}));
const $inner_content__setup = ($scope) => {
	$inner_content__input_content($scope);
	$inner_content__setup__script($scope);
};
const $inner_content = /*@__PURE__*/ _content("__tests__/tags/outer.marko_1_content", "<button>click</button><!><!>", " b%c", $inner_content__setup);
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
	$input_content_direct($scope["#childScope/0"], $inner_content($scope));
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($inner_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button id=increment>click</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $outer_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count));
const $outer_content__setup = $outer_content__count;
const $outer_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<span> </span>", "D l", $outer_content__setup);
const $count__closure = /*@__PURE__*/ _closure($outer_content__count);
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$count__closure($scope);
	$count__script($scope);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $outer_content($scope));
	$count($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
