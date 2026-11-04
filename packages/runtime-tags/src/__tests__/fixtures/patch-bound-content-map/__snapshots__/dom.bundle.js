// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// tags/outer.marko
const $value = /*@__PURE__*/ _fill_let("c1", 6, ($scope) => {
	$input_content($scope.b, $scope.g.get("value"));
	_text($scope.c, $scope.g.has($scope.g.get("value")));
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, new Map($scope.g));
}));

// template.marko
const $Body_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 7, ($scope) => _text($scope.a, $scope._.d), 0, "a3", 0);
const $Body_content = _content$1("a0", "<em> </em>", "D ", $Body_content__input_label);
