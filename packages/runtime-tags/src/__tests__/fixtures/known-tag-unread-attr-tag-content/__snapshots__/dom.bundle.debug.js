// tags/child.marko
const $template$2 = "<span> </span><!><!>";
const $walks$2 = "D l%c";
const $setup$2 = () => {};
const $input_item_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $input_a = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_item_content = $dynamicTag;
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_item($scope, input.item);
};
const $input_item = ($scope, input_item) => $input_item_content($scope, input_item?.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, 0, $input);

// tags/static-child.marko
const $template$1 = "<span>static</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var static_child_default = /*@__PURE__*/ _template("__tests__/tags/static-child.marko", $template$1, "b");

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button class=inc>inc</button>`)($template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& b`)($walks$2, "b");
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_7*content", "item");
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	let $item;
	if ($scope.n) {
		$item = attrTag({ content: $item_content($scope) });
	}
	$input_item($scope["#childScope/0"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_a($scope["#childScope/0"], 1);
	$n($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
