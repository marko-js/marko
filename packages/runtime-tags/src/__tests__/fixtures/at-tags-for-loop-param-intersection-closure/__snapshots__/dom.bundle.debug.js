// tags/list/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => $for_content__item_content($scope, item?.content);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%c", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list/index.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>Multiplier: <!></button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& Db%l`)("b%c");
const $item_content__mult__OR__item = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope.item * $scope._.mult));
const $item_content__mult = /*@__PURE__*/ _closure_get("mult", $item_content__mult__OR__item);
const $item_content__setup = $item_content__mult;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1_content", " ", " b", $item_content__setup), { item: $item_content__mult__OR__item });
const $mult__closure = /*@__PURE__*/ _closure($item_content__mult);
const $mult__script = _script("__tests__/template.marko_0_mult", ($scope) => _on($scope["#button/1"], "click", function() {
	$mult($scope, $scope.mult + 1);
}));
const $mult = /*@__PURE__*/ _let("mult/3", ($scope) => {
	_text($scope["#text/2"], $scope.mult);
	$mult__closure($scope);
	$mult__script($scope);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	let $item;
	forOf([
		1,
		2,
		3
	], (item) => {
		$item = attrTags($item, { content: $item_content($scope, { item }) });
	});
	$input_item($scope["#childScope/0"], $item);
	$mult($scope, 2);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
