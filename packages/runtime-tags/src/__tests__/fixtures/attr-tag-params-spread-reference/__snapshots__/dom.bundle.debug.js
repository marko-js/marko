// tags/child.marko
const $template$1 = "<!>";
const $walks$1 = "%b";
const $setup$1 = () => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], JSON.stringify(input));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "<!>", "%b", $setup$1, $input$1);

// template.marko
const $template = "<!>";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("%b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	let $item;
	forUntil(1, 0, 1, (i) => {
		$item = attrTags($item, { value: i });
	});
	$input$1($scope["#childScope/0"], {
		...$scope.input,
		item: $item
	});
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
