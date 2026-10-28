// template.marko
const $Box_content__show__OR__label__OR__n = /*@__PURE__*/ _or(7, ($scope) => _text($scope.b, $scope.e ? $scope.f + $scope.g : "-"), 2);
const $Box_content__n = /*@__PURE__*/ _let(6, $Box_content__show__OR__label__OR__n);
const $Box_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Box_content__n($scope, +$scope.g + 1);
}));
const $Box_content__setup = ($scope) => {
	$Box_content__n($scope, 0);
	$Box_content__setup__script($scope);
};
const $Box_content__show = /*@__PURE__*/ _const(4, $Box_content__show__OR__label__OR__n);
const $Box_content__label = /*@__PURE__*/ _const(5, $Box_content__show__OR__label__OR__n);
const $Box_content__$params = ($scope, $params2) => {
	$Box_content__show($scope, $params2[0].show);
	$Box_content__label($scope, $params2[0].label);
};
const $Box_content = _content$1("a0", "<button> </button>", " D ", $Box_content__setup, $Box_content__$params);
