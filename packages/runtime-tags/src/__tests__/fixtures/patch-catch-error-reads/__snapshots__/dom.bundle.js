// template.marko
const $catch_content2__cause_code = ($scope, cause_code) => _text($scope.a, cause_code);
const $catch_content2__$params = ($scope, $params4) => $catch_content2__cause_code($scope, $params4[0].cause?.code);
const $catch_content2 = _content$1("a0", "<i> </i>", "D ", 0, $catch_content2__$params);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a2", "<b> </b>", "D ", 0, $catch_content__$params);
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.d, $scope.i));
const $setup__script = _script("a10", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.i + 1);
}));
