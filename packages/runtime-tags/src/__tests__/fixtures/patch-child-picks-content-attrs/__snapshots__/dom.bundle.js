// template.marko
const $b_content__s = /*@__PURE__*/ _closure_get_patch("a6", 9, ($scope) => _text($scope.a, $scope._.h));
const $b_content = _content$1("a2", "B<!>", "b%", $b_content__s);
const $a_content__input_x = /*@__PURE__*/ _closure_get_patch("a0", 8, ($scope) => _text($scope.a, $scope._.f), 0, "a4", 0);
const $a_content = _content$1("a1", "A<!>", "b%", $a_content__input_x);
const $s = _let(7, /* @__PURE__ */ _closure($b_content__s));
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	$s($scope, +$scope.h + 1);
}));
