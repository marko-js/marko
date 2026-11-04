// tags/inner.marko
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $input_content$1 = $dynamicTag$1;

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(7, ($scope) => $dynamicTag($scope, $scope.h));
const $input_content = ($scope, input_content) => {
	$c($scope, input_content);
	$input_content$1($scope.c, input_content);
	$input_content$1($scope.d, input_content);
};
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/outer.marko
const $o = /*@__PURE__*/ _fill_let("d1", 5, ($scope) => $input_content($scope.b, $scope.f));
const $setup__script = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));

// template.marko
const $outer_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 5, ($scope) => _text($scope.c, $scope._._.e), ($scope) => $scope._._, "a3", 0);
const $outer_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $outer_content__setup = ($scope) => {
	$outer_content__input_label($scope);
	$outer_content__uid($scope, _id($scope));
};
const $outer_content = _content$1("a1", "<input><label> </label>", " b D ", $outer_content__setup);
