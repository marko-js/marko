// template.marko
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal_patch(() => import("./v:child.marko.input_value.mjs"), "_a");
const $value = /*@__PURE__*/ _let(7, ($scope) => $load_Child_tag_input_value($scope.b, $scope.h));
const $valueChange = ($scope) => (_new_value) => {
	$value($scope, _new_value);
};
_resumed.b0 = $valueChange;

// child.marko
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.e($scope.f + 1);
	});
	console.log("child effect");
});
const $input_value = /*@__PURE__*/ _const(5, ($scope) => _text($scope.b, $scope.f));
