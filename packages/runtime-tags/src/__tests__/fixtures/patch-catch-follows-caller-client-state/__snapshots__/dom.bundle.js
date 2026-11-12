// tags/child.marko
const $catch_content2__input_label = /*@__PURE__*/ _closure_get_patch("b6", 9, ($scope) => _text($scope.b, $scope._.g), 0, "b10", 1);
const $global_label_key = /*@__PURE__*/ _global_key(13, "label");
const $catch_content2__$global_label = /*@__PURE__*/ _global_closure("b5", $global_label_key, ($scope) => _text($scope.a, $scope.$.label));
const $catch_content2__setup = ($scope) => {
	$catch_content2__input_label($scope);
	$catch_content2__$global_label($scope);
};
const $catch_content2__$params = ($scope, $params3) => _text($scope.c, $params3[0]?.message);
const $catch_content2 = _content$1("b8", "<b><!> <!> <!></b>", "D%c%c%", $catch_content2__setup, $catch_content2__$params);
const $catch_content__input_label = /*@__PURE__*/ _closure_get_patch("b1", 9, ($scope) => _text($scope.b, $scope._.g), 0, "b10", 0);
const $catch_content__$global_label = /*@__PURE__*/ _global_closure("b0", $global_label_key, ($scope) => _text($scope.a, $scope.$.label));
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__$global_label($scope);
};
const $catch_content__$params = ($scope, $params2) => _text($scope.c, $params2[0]?.message);
const $catch_content = _content$1("b3", "<b><!> <!> <!></b>", "D%c%c%", $catch_content__setup, $catch_content__$params);
const $input_n = ($scope, input_n) => _text($scope.a, input_n);

// template.marko
const $n = _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$input_n($scope.c, $scope.h);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));
