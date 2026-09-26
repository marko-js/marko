// tags/card/index.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("b3", "<b> </b>", "D ", 0, $catch_content__$params);

// template.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
