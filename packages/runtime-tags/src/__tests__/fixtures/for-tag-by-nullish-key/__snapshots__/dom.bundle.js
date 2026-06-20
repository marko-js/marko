// template.marko
const $for_content__item_id = ($scope, item_id) => _text($scope.a, item_id ?? "?");
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for_content__item = ($scope, item) => $for_content__item_id($scope, item?.id);
const $for = /* @__PURE__ */ _for_of(0, "<li> </li>", "D l", 0, $for_content__$params);
const $items__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.c]);
}));
const $items = /* @__PURE__ */ _let(2, ($scope) => {
	$for($scope, [$scope.c, (item) => item.id]);
	$items__script($scope);
});
