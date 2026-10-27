// tags/shows.marko
const $template$2 = "<div><!></div><pre></pre>";
const $walks$2 = " D%l b";
const $setup$2 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content__script = _script("__tests__/tags/shows.marko_0_input_content#5", ($scope) => {
	if ($scope.input_content) _el_read($scope["#pre/2"]).textContent = _el_read($scope["#div/0"]).textContent;
});
const $input_content = /*@__PURE__*/ _const("input_content", ($scope) => {
	$dynamicTag($scope, $scope.input_content);
	$input_content__script($scope);
});
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var shows_default = /*@__PURE__*/ _template("__tests__/tags/shows.marko", $template$2, $walks$2, 0, $input$2);

// tags/first.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $setup$1 = ($_) => {};
const $item = ($scope, item) => $item_content$1($scope, item?.content);
const $item_content$1 = ($scope, item_content) => $input_content($scope["#childScope/0"], item_content);
const $input_item = ($scope, input_item) => $item($scope, [...input_item][0]);
const $input$1 = ($scope, input) => $input_item($scope, input.item);
var first_default = /*@__PURE__*/ _template("__tests__/tags/first.marko", $template$1, $walks$1, 0, $input$1);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = ($_) => {};
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", " ", " "), { x: ($scope) => _text($scope["#text/0"], $scope.x) });
_resumed["__tests__/template.marko_1*content"] = $item_content;
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $item;
	forOf($scope.input_items, (x) => {
		$item = attrTags($item, { content: $item_content($scope, { x }) });
	});
	$input_item($scope["#childScope/0"], $item);
});
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
