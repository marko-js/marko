// template.marko
const $template = "<div> </div><div> </div><button>Update</button>";
const $walks = "D lD l b";
const $items__OR__index__script = _script("__tests__/template.marko_0_items_index", ($scope) => _on($scope["#button/2"], "click", function() {
	const newItems = $scope.items.slice(1);
	$items($scope, newItems);
	$index($scope, ($scope.index + 1) % newItems.length);
}));
const $items__OR__index = /*@__PURE__*/ _or(6, ($scope) => {
	_text($scope["#text/1"], $scope.items[$scope.index]);
	$items__OR__index__script($scope);
});
const $items = /*@__PURE__*/ _let("items/3", ($scope) => {
	$items_($scope, $scope.items?.[0]);
	$items__OR__index($scope);
});
const $items_ = /*@__PURE__*/ _const("items_0", ($scope) => _text($scope["#text/0"], $scope.items_0));
const $index = /*@__PURE__*/ _let("index/5", $items__OR__index);
function $setup($scope) {
	$items($scope, [
		"a",
		"b",
		"c"
	]);
	$index($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
