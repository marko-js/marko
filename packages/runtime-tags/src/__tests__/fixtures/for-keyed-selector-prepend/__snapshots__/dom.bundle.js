// template.marko
const $for_content__selected__OR__row_id = /* @__PURE__ */ _or(5, ($scope) => _attr_class($scope.a, $scope._.d === $scope.e && "danger"));
const $for_content__selected = /* @__PURE__ */ _for_selector(1, 3, 4, $for_content__selected__OR__row_id);
const $for_content__setup = $for_content__selected;
const $for_content__row_id = /* @__PURE__ */ _const(4, $for_content__selected__OR__row_id);
const $for_content__row_label = ($scope, row_label) => _text($scope.b, row_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_id($scope, $params2[0]?.id);
	$for_content__row_label($scope, $params2[0]?.label);
};
const $for = /* @__PURE__ */ _for_of(1, "<li> </li>", " D l", $for_content__setup, $for_content__$params);
const $rows = /* @__PURE__ */ _let(2, ($scope) => $for($scope, [$scope.c, "id"]));
const $selected = /* @__PURE__ */ _let(3, $for_content__selected);
const $nextId = /* @__PURE__ */ _let(4);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, [{
		id: $scope.e,
		label: "new"
	}, ...$scope.c]);
	$selected($scope, $scope.e);
	$nextId($scope, $scope.e + 1);
}));
