// template.marko
const $Alt_content__user_name = ($scope, user_name) => _text($scope.a, user_name);
const $Alt_content__$params = ($scope, $params3) => $Alt_content__user_name($scope, $params3[0].user?.name);
const $Alt_content = _content$1("c1", "<i> </i>", "D ", 0, $Alt_content__$params);
const $Row_content__user_name = ($scope, user_name) => _text($scope.a, user_name);
const $Row_content__$params = ($scope, $params2) => $Row_content__user_name($scope, $params2[0].user?.name);
const $Row_content = _content$1("c0", "<p> </p>", "D ", 0, $Row_content__$params);
const $n = /*@__PURE__*/ _fill_let("c16", 20, ($scope) => _text($scope.b, $scope.u));
const $setup__script = _script("c2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.u + 1);
}));
