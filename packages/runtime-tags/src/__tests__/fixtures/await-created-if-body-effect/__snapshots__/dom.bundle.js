// template.marko
let $load_Lazy_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:lazy.marko.input_label.mjs"));
const $await_content__n__OR__x = /*@__PURE__*/ _or(4, ($scope) => $load_Lazy_tag_input_label($scope.b, $scope.d + $scope._._.g));
const $await_content__n = /*@__PURE__*/ _closure_get(8, $await_content__n__OR__x, ($scope) => $scope._._, "b1");
const $await_content__x__script = _script("b0", ($scope) => console.log("await", $scope.d));
const $n = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($await_content__n));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));

// lazy.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
