// template.marko
const $catch_content2__$params = ($scope, $params4) => _text($scope.a, $params4[0].cause?.code);
const $catch_content2 = _content$1("a0", "<i> </i>", "D ", 0, $catch_content2__$params);
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a2", "<b> </b>", "D ", 0, $catch_content__$params);
const $count = _let(8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a8", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
