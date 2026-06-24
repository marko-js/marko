// template.marko
const $template = "<div><!><button id=add>Add</button><button id=remove>Remove</button></div>";
const $walks = "D%b b l";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $id__OR__items__script = _script("__tests__/template.marko_0_id_items", ($scope) => _on($scope["#button/1"], "click", function() {
	const nextId = $scope.id + 1;
	$id($scope, nextId);
	$items($scope, [...$scope.items, nextId]);
}));
const $id__OR__items = /*@__PURE__*/ _or(5, $id__OR__items__script);
const $id = /*@__PURE__*/ _let("id/3", $id__OR__items);
const $for = /*@__PURE__*/ _for_of("#text/0", " ", " b", 0, $for_content__$params);
const $items__script = _script("__tests__/template.marko_0_items", ($scope) => _on($scope["#button/2"], "click", function() {
	$items($scope, $scope.items.slice(0, -1));
}));
const $items = /*@__PURE__*/ _let("items/4", ($scope) => {
	$for($scope, [$scope.items]);
	$id__OR__items($scope);
	$items__script($scope);
});
function $setup($scope) {
	$id($scope, 0);
	$items($scope, []);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
