// template.marko
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("a2", "<b> </b>", "D ", 0, $catch_content__$params);
const $count = _let(7, ($scope) => _text($scope.c, $scope.h));
const $setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.h + 1);
}));
