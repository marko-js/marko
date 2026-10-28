// template.marko
const shout = (s) => s.toUpperCase() + "!";
const flag = "cli";
const $if_content__input_title__OR__count = /*@__PURE__*/ _fill_signal("6 a2", /*@__PURE__*/ _or_resume("a4", 1, ($scope) => _text($scope.a, shout($scope._.g) + " #" + $scope._.i)), _if_closure, 2, 0);
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_title__OR__count);
const $count = /*@__PURE__*/ _let(8, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.i + 1);
	document.querySelector("main").dataset.flag = flag;
}));
