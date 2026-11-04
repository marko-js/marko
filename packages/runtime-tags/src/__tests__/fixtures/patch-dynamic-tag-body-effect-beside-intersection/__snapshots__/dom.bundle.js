// template.marko
const $inputtag_content__input_a__OR__n = /*@__PURE__*/ _or_patch("a6", 5, ($scope) => _text($scope.b, $scope._.e + $scope.e));
const $inputtag_content__input_a__OR__input_b = /*@__PURE__*/ _or_patch("a5", 3, ($scope) => _text($scope.c, $scope._.e + $scope._.f));
const $inputtag_content__input_a__script = _script_patch("a1 >e", ($scope) => document.body.dataset.a = $scope._.e);
const $inputtag_content__input_a = /*@__PURE__*/ _closure_get_patch("a3", 6, ($scope) => {
	$inputtag_content__input_a__OR__n($scope);
	$inputtag_content__input_a__OR__input_b($scope);
	$inputtag_content__input_a__script($scope);
}, 0, "a8", 0);
const $inputtag_content__n = /*@__PURE__*/ _fill_let("a7", 4, $inputtag_content__input_a__OR__n);
const $inputtag_content__setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$inputtag_content__n($scope, +$scope.e + 1);
}));
const $inputtag_content__setup = ($scope) => {
	$inputtag_content__input_a($scope);
	$inputtag_content__input_b($scope);
	$inputtag_content__setup__script($scope);
	$inputtag_content__n($scope, 0);
};
const $inputtag_content__input_b = /*@__PURE__*/ _closure_get_patch("a4", 7, $inputtag_content__input_a__OR__input_b, 0, "a9", 0);
const $inputtag_content = /*@__PURE__*/ _content$1("a0", "<button> </button><p> </p>", " D lD ", $inputtag_content__setup);
_content_closures_resume($inputtag_content);
