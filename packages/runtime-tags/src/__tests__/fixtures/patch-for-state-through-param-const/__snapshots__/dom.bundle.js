// template.marko
const $for_content__s_id = ($scope, s_id) => _text($scope.a, s_id);
const $for_content__$params = ($scope, $params2) => $for_content__s_id($scope, $params2[0]?.id);
const $for = /*@__PURE__*/ _for_of(1, "<div> </div>", "D ", 0, $for_content__$params);
const $input_active__OR__shown = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _or(10, ($scope) => $for($scope, [$scope.f ? $scope.j : $scope.j.slice(0, 1), "id"])));
const $shown = /*@__PURE__*/ _const(9, $input_active__OR__shown);
const $sessions__OR__ws = /*@__PURE__*/ _fill_join("a1", 7, /*@__PURE__*/ _or(8, ($scope) => $shown($scope, $scope.h ? $scope.g ?? $scope.h?.sessions : [])));
const $sessions = /*@__PURE__*/ _let(6, $sessions__OR__ws);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$sessions($scope, [{ id: "c" }]);
}));
