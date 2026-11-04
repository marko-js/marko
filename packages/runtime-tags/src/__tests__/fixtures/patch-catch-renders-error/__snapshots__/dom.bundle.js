// template.marko
const $catch_content2__$params = ($scope, $params3) => _text($scope.a, $params3[0]?.message);
const $catch_content2 = _content$1("a4", "<i> </i>", "D ", 0, $catch_content2__$params);
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $catch_content = _content$1("a1", "<b> </b>", "D ", 0, $catch_content__$params);
const $count = _let(7, ($scope) => _text($scope.d, $scope.h));
const $setup__script = _script("a6", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
