// box.marko
const $input_k = ($scope, input_k) => _text($scope.a, input_k);

// template.marko
const $inputonCardnull_content__count = /*@__PURE__*/ _init_closure_get("c6", 8, ($scope) => $input_k($scope.a, $scope._.g));
const $count = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($inputonCardnull_content__count));
const $setup__script = _script("c2", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
