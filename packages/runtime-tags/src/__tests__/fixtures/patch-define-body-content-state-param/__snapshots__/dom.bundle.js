// tags/one.marko
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $Wrap_content__content__OR__t = /*@__PURE__*/ _fill_join("b2", 4, /*@__PURE__*/ _fill_join("b1", 3, /*@__PURE__*/ _or_resume("b3", 5, ($scope) => $Wrap_content__dynamicTag($scope, $scope.d, ($_) => ({ title: $scope.e })))));
const $Wrap_content__t = /*@__PURE__*/ _const(4, $Wrap_content__content__OR__t);
const $input_t = ($scope, input_t) => $Wrap_content__t($scope.a, input_t);

// template.marko
const $one_content__input_y = /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "a0"), 0);
const $one_content = _content$1("a1", "A<!>", "b%", $one_content__input_y);
const $s = /*@__PURE__*/ _let(5, ($scope) => $input_t($scope.b, $scope.f));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$s($scope, $scope.f + "!");
}));
