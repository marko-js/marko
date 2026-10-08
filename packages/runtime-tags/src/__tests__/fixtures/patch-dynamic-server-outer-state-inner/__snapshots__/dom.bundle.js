// box.marko
const $input_k = ($scope, input_k) => _text($scope.a, input_k);

// template.marko
const $inputonCardnull_content__count = _shell_closure_get("c8", 8, ($scope) => $input_k($scope.a, $scope._.g), 0, "c11");
const $count = /*@__PURE__*/ _fill_let("c5", 6, /* @__PURE__ */ _closure($inputonCardnull_content__count));
const $setup__script = _script("c3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.g + 1);
}));
