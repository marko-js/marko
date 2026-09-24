// tags/child.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = () => {};
const $for_content__item__script = _script("__tests__/tags/child.marko_1_item#2", ($scope) => _attrs_script($scope, "#button/0"));
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	_attrs_content($scope, "#button/0", $scope.item);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button></button>", " ", 0, $for_content__$params);
const $input_list = ($scope, input_list) => $for($scope, [input_list]);
const $input$1 = ($scope, input) => $input_list($scope, input.list);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, "b%c", 0, $input$1);

// tags/wrap.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = () => {};
const $input_item = ($scope, input_item) => $input_list($scope["#childScope/0"], input_item);
const $input = ($scope, input) => $input_item($scope, input.item);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $item_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "Two");
const $item_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#1/subscribe");
const $item_content__setup = $item_content__count;
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "One <!>", "b%", $item_content__setup);
const $count__closure = /*@__PURE__*/ _closure($item_content__count);
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$input_item($scope["#childScope/0"], attrTags(attrTag({
		onClick: $onClick($scope),
		content: $item_content($scope)
	}), { content: $item_content2($scope) }));
	$count__closure($scope);
});
function $setup($scope) {
	$count($scope, 0);
}
const $onClick = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resumed["__tests__/template.marko_0/onClick"] = $onClick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
