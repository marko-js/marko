// template.marko
let $load_Child_tag_input_n = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_n.mjs"));
const $n = /*@__PURE__*/ _let(3, ($scope) => $load_Child_tag_input_n($scope.b, $scope.d));
const $setup__script = _script("b0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.d + 1);
}));

// child.marko
const $input_n = ($scope, input_n) => _text($scope.a, input_n);
