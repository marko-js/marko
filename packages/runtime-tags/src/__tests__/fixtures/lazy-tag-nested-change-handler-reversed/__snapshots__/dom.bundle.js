// template.marko
let $load_Child_tag_input_count = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_count.mjs"));
const $count = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.b, $scope.e);
	$load_Child_tag_input_count($scope.d, $scope.e);
});
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.e + 1);
}));

// child.marko
let $load_GrandChild_tag_input_value = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_value.mjs"));
const $value = /*@__PURE__*/ _let(7, ($scope) => {
	_text($scope.b, $scope.h);
	$load_GrandChild_tag_input_value($scope.d, $scope.h);
});
const $input_count = ($scope, input_count) => _text($scope.a, input_count);
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed.a0 = $valueChange;

// grand-child.marko
const $value = /*@__PURE__*/ _let_change(7, ($scope) => _text($scope.b, $scope.h));
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(6, ($scope) => $value($scope, $scope.e, $scope.f));
const $input_value = /*@__PURE__*/ _const(4, $input_value__OR__input_valueChange);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$value($scope, +$scope.h + 1);
}));
