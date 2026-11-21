// tags/leaf.marko
const $template$2 = "<span>leaf</span>";
const $walks$2 = "b";
const $setup$2 = ($_) => {};
var leaf_default = /*@__PURE__*/ _template("__tests__/tags/leaf.marko", $template$2, "b");

// tags/tree.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_done = ($scope, input_done) => $dynamicTag($scope, input_done ? leaf_default : tree_default, ($_) => ({ done: true }));
const $input = ($scope, input) => $input_done($scope, input.done);
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
function $setup($scope) {
	$input_done($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
