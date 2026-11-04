// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_items = /*@__PURE__*/ _const("input_items", ($scope) => {
	let $item;
	forOf($scope.input_items, (x) => {
		$item = attrTags($item, { label: x.name });
	});
	$input_item($scope["#childScope/0"], $item);
});
const $input = ($scope, input) => $input_items($scope, input.items);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/list.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__it_label__script = _script("__tests__/tags/list.marko_1_it_label#3", ($scope) => console.log("row", $scope.it_label));
const $for_content__it_label = /*@__PURE__*/ _const("it_label", ($scope) => {
	_text($scope["#text/0"], $scope.it_label);
	$for_content__it_label__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__it_label($scope, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<i> </i>", "D ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template, "b%c", 0, $input);
