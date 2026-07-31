// template.marko
const $template = "<ul></ul><button class=rotate>Rotate</button><button class=bump>Bump b</button><button class=resettle>Same items</button>";
const $walks = " b b b b";
const $for_content__index = ($scope, index) => _text($scope, "#text/0", index);
const $for_content__item_id = ($scope, item_id) => _text($scope, "#text/1", item_id);
const $for_content__item_n = ($scope, item_n) => _text($scope, "#text/2", item_n);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_id($scope, $params2[0]?.id);
	$for_content__item_n($scope, $params2[0]?.n);
	$for_content__index($scope, $params2[1]);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><!>:<!>=<!></li>", "D%c%c%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/4", ($scope) => $for($scope, [$scope.items, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$items($scope, [...$scope.items.slice(1), $scope.items?.[0]]);
	});
	_on($scope["#button/2"], "click", function() {
		$items($scope, $scope.items.map((item) => item.id === "b" ? {
			...item,
			n: item.n + 10
		} : item));
	});
	_on($scope["#button/3"], "click", function() {
		$items($scope, [...$scope.items]);
	});
});
function $setup($scope) {
	$items($scope, [
		{
			id: "a",
			n: 1
		},
		{
			id: "b",
			n: 2
		},
		{
			id: "c",
			n: 3
		}
	]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
