// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/outer.marko
const $o = _fill_let("c0", 4, ($scope) => $input_content($scope.a, $scope.e));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $outer_content = _content$1("a1", "<em>static <!></em>", "Db%", $outer_content__input_label);
