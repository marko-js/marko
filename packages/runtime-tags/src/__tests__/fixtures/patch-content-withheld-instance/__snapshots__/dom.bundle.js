// tags/frag-host.marko
const $frag_content__input_note = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_join_closure("b5", 3, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._, "b2"), 0));
const $frag_content = _content$1("b0", "<em> </em>", "D ", $frag_content__input_note);
const $for_content__input_mode__OR__i__OR__frag_content = /*@__PURE__*/ _or_resume("b3", 5, ($scope) => _attr_content($scope, "a", $scope.c || $scope._.e ? $scope.e : null), 2);
const $for_content__input_mode = /*@__PURE__*/ _for_closure(0, $for_content__input_mode__OR__i__OR__frag_content);
const $input_mode = /*@__PURE__*/ _const(4, $for_content__input_mode);

// template.marko
const $mode = _let(5, ($scope) => $input_mode($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.f);
}));
