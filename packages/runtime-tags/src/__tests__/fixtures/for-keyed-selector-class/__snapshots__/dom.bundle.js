// template.marko
const $for_content__selected__OR__row_id = /* @__PURE__ */ _or(6, ($scope) => _attr_class($scope.a, $scope._.e === $scope.f && "danger"));
const $for_content__selected = /* @__PURE__ */ _for_selector(0, 4, $for_content__selected__OR__row_id);
const $for_content__setup = $for_content__selected;
const $for_content__row_id__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._, $scope.f);
}));
const $for_content__row_id = /* @__PURE__ */ _const(5, ($scope) => {
	$for_content__selected__OR__row_id($scope);
	$for_content__row_id__script($scope);
});
const $for_content__row_label = ($scope, row_label) => _text($scope.c, row_label);
const $for_content__$params = ($scope, $params2) => $for_content__row($scope, $params2[0]);
const $for_content__row = ($scope, row) => {
	$for_content__row_id($scope, row?.id);
	$for_content__row_label($scope, row?.label);
};
const $selected__OR__rows = /* @__PURE__ */ _or(6, _script("a3", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, $scope.f.filter((row) => row.id !== $scope.e));
})));
const $selected = /* @__PURE__ */ _let(4, ($scope) => {
	$selected__OR__rows($scope);
	$for_content__selected($scope);
});
const $for = /* @__PURE__ */ _for_of(0, "<tr><td><button class=select> </button></td></tr>", " E D n", $for_content__setup, $for_content__$params);
const $rows__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$rows($scope, [...$scope.f.slice(1), $scope.f?.[0]]);
}));
const $rows = /* @__PURE__ */ _let(5, ($scope) => {
	$for($scope, [$scope.f, "id"]);
	$selected__OR__rows($scope);
	$rows__script($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$selected($scope, void 0);
}));
