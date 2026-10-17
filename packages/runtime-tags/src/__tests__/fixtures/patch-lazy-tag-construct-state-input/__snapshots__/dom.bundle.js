// template.marko
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:child.marko.input_label.mjs"), "_a");
const $if_content__input_label__OR__n = /*@__PURE__*/ _fill_join_if("b2", 6, /*@__PURE__*/ _shell_or("b5", 2, ($scope) => $load_Child_tag_input_label($scope.b, `${$scope._.g}${$scope._.h}`)), 2, 0);
const $if_content__n = /*@__PURE__*/ _if_closure(2, 0, $if_content__input_label__OR__n);
const $n = /*@__PURE__*/ _fill_let("b3", 7, ($scope) => {
	_text($scope.b, $scope.h);
	$if_content__n($scope);
});
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.h + 1);
}));

// child.marko
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
