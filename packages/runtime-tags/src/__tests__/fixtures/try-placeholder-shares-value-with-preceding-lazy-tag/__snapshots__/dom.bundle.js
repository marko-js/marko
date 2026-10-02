// template.marko
const cache = { n: 1 };
function getShared() {
	return cache;
}
const $placeholder_content__shared = /*@__PURE__*/ _const(2);
const $placeholder_content__count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $placeholder_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$placeholder_content__count($scope, $scope.d + Object.keys($scope.c).length);
}));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__shared($scope, getShared());
	$placeholder_content__count($scope, 0);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content("b1", "<button class=placeholder> </button>", " D ", $placeholder_content__setup);

// child.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + Object.keys($scope.e).length);
}));
