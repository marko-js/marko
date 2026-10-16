// template.marko
const $catch_content2__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content$1("a5", "<i> </i>", "D ", 0, $catch_content2__$params);
const $catch_content__err = ($scope, err) => _text($scope.a, err);
const $catch_content__$params = ($scope, $params2) => $catch_content__err($scope, $params2[0]);
const $catch_content = _content$1("a3", "<b> </b>", "D ", 0, $catch_content__$params);
const $count = /*@__PURE__*/ _fill_let("a7", 7, ($scope) => _text($scope.d, $scope.h));
const $setup__script = _script("a6", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
