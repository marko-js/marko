// tags/frag-host.marko
const $frag_content__input_note = /*@__PURE__*/ _init_resume("b1", /*@__PURE__*/ _fill_closure("b3", 3, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.d), 0, "b2"), 0));
const $frag_content = _content$1("b0", "<em> </em>", "D ", $frag_content__input_note);
const $input_mode__OR__frag_content = /*@__PURE__*/ _or_resume("b4", 7, ($scope) => _attr_content($scope, "a", $scope.e ? $scope.g : null));
const $input_mode = /*@__PURE__*/ _const(4, $input_mode__OR__frag_content);

// template.marko
const $mode = /*@__PURE__*/ _let(5, ($scope) => $input_mode($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$mode($scope, !$scope.f);
}));
