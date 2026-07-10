// template.marko
const $for_content2__item_name = ($scope, item_name) => _text($scope.a, item_name);
const $for_content2__$params = ($scope, $params3) => $for_content2__item_name($scope, $params3[0]?.name);
const $for_content__item_name = ($scope, item_name) => _text($scope.a, item_name);
const $for_content__$params = ($scope, $params2) => $for_content__item_name($scope, $params2[0]?.name);
const $for = /*@__PURE__*/ _for_of(1, "<span> </span>", "D l", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of(2, "<em> </em>", "D l", 0, $for_content2__$params);
const $items = /*@__PURE__*/ _let(6, ($scope) => {
	$for($scope, [$scope.g, "id"]);
	$for2($scope, [$scope.g, (item) => item.id]);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, $scope.g.toReversed());
}));
