// tags/outer.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__value_content = /*@__PURE__*/ _init_resume("b4", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.h)));
const $value = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => $value_content($scope, $scope.g?.content));
const $value_content = /*@__PURE__*/ _const(7, $if_content__value_content);
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$value($scope, {});
}));

// template.marko
const $Body_content__input_label = /*@__PURE__*/ _fill_join_closure("a3", 3, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.d), 0, "a1"), 0);
const $Body_content = _content$1("a0", "<em> </em>", "D ", $Body_content__input_label);
