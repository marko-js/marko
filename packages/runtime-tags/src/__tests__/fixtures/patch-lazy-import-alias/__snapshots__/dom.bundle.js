// template.marko
let $load_X_tag_input_label = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_label.mjs"), "_a");
const $if_content__n = /*@__PURE__*/ _fill_let("b2", 4, ($scope) => {
	_text($scope.b, $scope.e);
	$load_X_tag_input_label($scope.d, $scope.e);
});
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$if_content__n($scope, +$scope.e + 1);
}));

// child.marko
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
