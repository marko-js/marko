// tags/child.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = () => {};
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => _return($scope, $scope.input_x));
const $input$1 = ($scope, input) => $input_x($scope, input.x);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", 0, $input$1);

// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)(""), /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("")), { item($scope) {
	$input_x($scope["#childScope/0"], $scope.item);
	_text($scope["#text/1"], $scope.item);
} });
function $setup($scope) {
	let $item;
	forOf(["a", "b"], (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item }) });
	});
	$input_item($scope["#childScope/0"], $item);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
