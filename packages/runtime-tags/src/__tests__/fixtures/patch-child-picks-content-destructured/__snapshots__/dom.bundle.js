// template.marko
const $b_content__s = /*@__PURE__*/ _init_resume("a7", /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.g)));
const $b_content = _content$1("a3", "B<!>", "b%", $b_content__s);
const $a_content__input_x = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_join_closure("a5", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.f), 0, "a1"), 0));
const $a_content = _content$1("a2", "A<!>", "b%", $a_content__input_x);
const $s = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($b_content__s));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$s($scope, +$scope.g + 1);
}));
