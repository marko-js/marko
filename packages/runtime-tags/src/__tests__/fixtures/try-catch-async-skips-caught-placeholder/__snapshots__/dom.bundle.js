// template.marko
const $placeholder_content2__count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $placeholder_content2__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$placeholder_content2__count($scope, +$scope.c + 1);
}));
const $placeholder_content2__setup = ($scope) => {
	$placeholder_content2__count($scope, 0);
	$placeholder_content2__setup__script($scope);
};
const $placeholder_content2 = _content("a1", "<button>placeholder <!></button>", " Db%", $placeholder_content2__setup);
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a2", "caught <!>", "b%", 0, $catch_content__$params);
const $placeholder_content = _content("a3", "loading");
const $count = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));
