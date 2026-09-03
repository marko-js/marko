// template.marko
const $catch_content__n = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $catch_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$catch_content__n($scope, +$scope.g + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__n($scope, 0);
	$catch_content__setup__script($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.b, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("a1", "<button><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__$params);
