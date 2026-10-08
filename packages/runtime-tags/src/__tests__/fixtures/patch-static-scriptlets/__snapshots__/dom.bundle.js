// template.marko
const shout = (s) => s.toUpperCase() + "!";
const flag = "cli";
const $if_content__input_title__OR__count = _fill_join_if("a2", 6, /*@__PURE__*/ _shell_join("a5", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, shout($scope._.g) + " #" + $scope._.i))), 0, 2, 0);
const $if_content__count = _shell_if_closure("a6", 2, 0, $if_content__input_title__OR__count);
const $count = /*@__PURE__*/ _fill_let("a3", 8, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.i + 1);
	document.querySelector("main").dataset.flag = flag;
}));
