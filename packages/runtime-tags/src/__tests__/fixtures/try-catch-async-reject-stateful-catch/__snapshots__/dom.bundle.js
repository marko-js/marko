// template.marko
const $catch_content__n = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $catch_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$catch_content__n($scope, +$scope.f + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__n($scope, 0);
	$catch_content__setup__script($scope);
};
const $catch_content__err = ($scope, err) => _text($scope.b, err?.message);
const $catch_content = _content("a1", "<button><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__err);
