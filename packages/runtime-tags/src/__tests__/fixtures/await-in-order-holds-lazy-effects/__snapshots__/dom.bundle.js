// template.marko
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $await_content__v = ($scope, v) => _text($scope.a, v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(2, $await_content__$params);
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$load_Child_tag_input_value($scope.b, $scope.d);
	$await_promise($scope, $scope.d ? $scope.d : resolveAfter($scope.d, 3));
});
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
