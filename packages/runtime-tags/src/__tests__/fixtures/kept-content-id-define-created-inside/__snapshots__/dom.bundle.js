// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = /*@__PURE__*/ _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.c, $scope._._.d), ($scope) => $scope._._, "a1");
const $Inner_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__uid($scope, _id($scope));
};
const $Inner_content = _content("a0", "<input><label> </label>", " b D ", $Inner_content__setup);
