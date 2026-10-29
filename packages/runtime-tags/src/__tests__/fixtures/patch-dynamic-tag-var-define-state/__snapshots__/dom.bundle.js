// template.marko
_dynamic_tag_var_resume(0);
const $Other_content__input_label = /*@__PURE__*/ _init_resume("a6", /*@__PURE__*/ _fill_closure("a9", 5, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.a, $scope._.f), 0, "a7"), 1));
const $Other_content__setup = ($scope) => {
	$Other_content__input_label($scope);
	_return($scope, -1);
};
const $Other_content = _content$1("a5", "<i> </i>", "D ", $Other_content__setup);
const $Counter_content__input_label = /*@__PURE__*/ _init_resume("a2", /*@__PURE__*/ _fill_closure("a9", 5, /*@__PURE__*/ _closure_get(11, ($scope) => _text($scope.b, $scope._.f), 0, "a3"), 0));
const $Counter_content__n = /*@__PURE__*/ _fill_let("a4", 3, ($scope) => {
	_text($scope.c, $scope.d);
	_return($scope, $scope.d);
});
const $Counter_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Counter_content__n($scope, +$scope.d + 1);
}));
const $Counter_content__setup = ($scope) => {
	$Counter_content__input_label($scope);
	$Counter_content__setup__script($scope);
	$Counter_content__n($scope, 0);
};
const $Counter_content = _content$1("a0", "<button class=inc><!> <!></button>", " D%c%", $Counter_content__setup);
const $count = _fill_var_resume("a8", ($scope, count) => _text($scope.c, count));
