// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c");
const $child_content__count__script = _script("__tests__/template.marko_1_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $child_content__count = /* @__PURE__ */ _closure_get("count", ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	$child_content__count__script($scope);
});
const $child_content__setup = $child_content__count;
const $child_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<button> </button>", " D l", $child_content__setup);
const $count__closure = /* @__PURE__ */ _closure($child_content__count);
const $count = /* @__PURE__ */ _let("count/1", $count__closure);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $child_content($scope));
	$count($scope, 0);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
