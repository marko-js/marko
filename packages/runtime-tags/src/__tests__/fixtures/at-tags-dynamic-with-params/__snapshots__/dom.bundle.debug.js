// tags/hello/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, 0, 1);
const $input_item = ($scope, input_item) => $dynamicTag($scope, input_item, () => [1]);
const $input = ($scope, input) => $input_item($scope, input.item);
var hello_default = /* @__PURE__ */ _template("__tests__/tags/hello/index.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!>${_w0}<button>Toggle</button>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b/${_w0}& b`)("b%c");
const $item_content__y = ($scope, y) => _text($scope["#text/0"], y);
const $item_content__$params = ($scope, $params2) => $item_content__y($scope, $params2[0]);
const $item_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "y: <!>", "b%b", 0, $item_content__$params);
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/1"], "click", function() {
	$x($scope, !$scope.x);
}));
const $x = /* @__PURE__ */ _let("x/2", ($scope) => {
	let $item;
	if ($scope.x) {
		$item = attrTag({ content: $item_content($scope) });
	}
	$input_item($scope["#childScope/0"], $item);
	$x__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$x($scope, true);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
