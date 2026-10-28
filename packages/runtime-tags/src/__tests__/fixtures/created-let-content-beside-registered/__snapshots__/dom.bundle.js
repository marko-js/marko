// tags/toggle.marko
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(1);
const $input_content__OR__open = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag$1($scope, $scope.f && $scope.e));
const $open = /*@__PURE__*/ _let(5, $input_content__OR__open);
const $setup__script$2 = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = /*@__PURE__*/ _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// tags/outer.marko
const $o = /*@__PURE__*/ _let(5, ($scope) => $input_content($scope.b, $scope.f));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$o($scope, void 0);
}));

// template.marko
const $inputonTogglediv_content__input_note = /*@__PURE__*/ _closure_get(9, ($scope) => _text($scope.a, $scope._.h), 0, "a3");
const $inputonTogglediv_content = _content("a2", "<em> </em>", "D ", $inputonTogglediv_content__input_note);
_content_resume($inputonTogglediv_content);
