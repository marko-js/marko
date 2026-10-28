// template.marko
const $Other_content__input_label = /*@__PURE__*/ _init_resume("a6", /*@__PURE__*/ _fill_join_closure("a8", 3, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._.d), 0, "a7"), 1));
const $Other_content = _content$1("a5", "<i> </i>", "D ", $Other_content__input_label);
const $Counter_content__input_label = /*@__PURE__*/ _init_resume("a2", /*@__PURE__*/ _fill_join_closure("a8", 3, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._.d), 0, "a3"), 0));
const $Counter_content__n = /*@__PURE__*/ _fill_let("a4", 3, ($scope) => _text($scope.c, $scope.d));
const $Counter_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$Counter_content__n($scope, +$scope.d + 1);
}));
const $Counter_content__setup = ($scope) => {
	$Counter_content__input_label($scope);
	$Counter_content__n($scope, 0);
	$Counter_content__setup__script($scope);
};
const $Counter_content = _content$1("a0", "<button class=inc><!> <!></button>", " D%c%", $Counter_content__setup);
