// template.marko
const $catch_content__shown = /*@__PURE__*/ _fill_let("a1", 5, ($scope) => _text($scope.b, $scope.f));
const $catch_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$catch_content__shown($scope, $scope.f + "!");
}));
const $catch_content__$params = ($scope, $params2) => $catch_content__shown($scope, $params2[0]?.message);
const $catch_content = _content$1("a3", "<button> </button>", " D ", $catch_content__setup, $catch_content__$params);
