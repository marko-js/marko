// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
_dynamic_tag_var_resume("#text/0");
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, ($_) => $for_content__value);
const $for_content__value = _var_resume("__tests__/tags/list.marko_1_value#6/var", ($scope, value) => _text($scope["#text/2"], value));
const $for_content__item_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__item_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><span> </span>", "b1bD ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => $input_item($scope, input.item);
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>more</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", 0, 0, /*@__PURE__*/ _return_setup(($_) => {})), { n: ($scope) => _return($scope, $scope.n * 10) });
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	let $item;
	forUntil($scope.count, 0, 1, (n) => {
		$item = attrTags($item, { content: $item_content($scope, { n }) });
	});
	$input_item($scope["#childScope/1"], $item);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
