// tags/list.marko
const $template$1 = "<ul></ul><!><!>";
const $walks$1 = " b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/1");
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__$params = ($scope, item) => $for_content__dynamicTag($scope, item?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#ul/0", "<li><!></li>", "D%", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => {
	$input_item($scope, input.item);
	$input_content($scope, input.content);
};
var list_default = /*@__PURE__*/ _template("__tests__/tags/list.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $item_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "two");
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "one");
const $hiddenhidden1List_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>after</em>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $hiddenhidden1List_content);
const $hidden = /*@__PURE__*/ _let("hidden/2", ($scope) => $dynamicTag($scope, $scope.hidden ? +$scope.hidden - 1 : list_default, ($_) => ({ item: attrTags(attrTag({ content: $item_content($scope) }), { content: $item_content2($scope) }) })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$hidden($scope, !$scope.hidden);
}));
function $setup($scope) {
	$hidden($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
