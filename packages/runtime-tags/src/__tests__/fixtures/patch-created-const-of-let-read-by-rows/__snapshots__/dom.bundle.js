// template.marko
function initial(user) {
	return user.name[0];
}
const $for_content__letter__OR__l = /*@__PURE__*/ _or_patch("a5", 5, ($scope) => _text($scope.b, $scope.e === $scope._.c ? "*" : ""));
const $for_content__letter = /*@__PURE__*/ _for_closure(0, $for_content__letter__OR__l, 6);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$if_content__user($scope._, { name: $scope.e });
}));
const $if_content__letter = /*@__PURE__*/ _const(2, $for_content__letter);
const $if_content__user = _let(1, ($scope) => $if_content__letter($scope, initial($scope.b)));
