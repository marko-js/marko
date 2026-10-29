// tags/outer.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__value_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.h));
const $value = /*@__PURE__*/ _let(6, ($scope) => $value_content($scope, $scope.g?.content));
const $value_content = /*@__PURE__*/ _const(7, $if_content__value_content);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, { content: void 0 });
}));

// template.marko
const $Body_content__input_label = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._.d), 0, "a1");
const $Body_content = _content("a0", "<em> </em>", "D ", $Body_content__input_label);
