// tags/dismiss-button.marko
const $template = "<button> </button>";
const $walks = " D l";
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.e();
}));
const $setup = $setup__script$1;
const $input_label = ($scope, input_label) => _text($scope.b, input_label);
const $input_onDismiss = /*@__PURE__*/ _const(4);

// template.marko
const $for_content__setup = ($scope) => {
	$setup($scope.a);
	$input_onDismiss($scope.a, $onDismiss($scope));
};
const $for_content__$params = ($scope, $params2) => $input_label($scope.a, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, "c"]);
}));
const $onDismiss = ($scope) => function() {
	document.getElementById("log").textContent = $scope.M;
};
_resumed.a0 = $onDismiss;
