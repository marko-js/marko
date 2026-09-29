// tags/wrap.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_row__OR__input_label = /*@__PURE__*/ _fill_join_if("b1", 5, /*@__PURE__*/ _fill_join_if("b0", 4, /*@__PURE__*/ _or(1, ($scope) => $if_content__dynamicTag($scope, $scope._.e, () => ({ label: $scope._.f }))), 0, 1, 0), 0, 1, 0);
const $if_content__input_row = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_row__OR__input_label);
const $if_content__setup = ($scope) => {
	$if_content__input_row._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure(1, 0, $if_content__input_row__OR__input_label);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b2", 6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $Row_content__label = ($scope, label) => _text($scope.a, label);
const $Row_content__$params = ($scope, $params2) => $Row_content__label($scope, ($params2?.[0]).label);
const $Row_content = _content$1("a1", "<em> </em>", "D ", 0, $Row_content__$params);
