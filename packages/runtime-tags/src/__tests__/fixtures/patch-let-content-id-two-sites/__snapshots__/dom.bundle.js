// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Field_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $Field_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $Field_content__setup = ($scope) => {
	$Field_content__input_label($scope);
	$Field_content__uid($scope, _id($scope));
};
const $Field_content = _content$1("a0", "<input><label> </label>", " b D ", $Field_content__setup);
