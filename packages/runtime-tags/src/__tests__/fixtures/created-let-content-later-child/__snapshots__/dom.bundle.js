// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $if_content__o = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_content($scope.a, $scope._.g));
const $o = /*@__PURE__*/ _let(6, $if_content__o);
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a0");
const $outer_content = _content("a1", "<em>static <!></em>", "Db%", $outer_content__input_label);
