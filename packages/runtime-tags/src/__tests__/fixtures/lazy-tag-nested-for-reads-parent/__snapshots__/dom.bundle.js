// child.marko
let $load_GrandChild_tag_input_obj = /*@__PURE__*/ _load_signal(($_) => import("./v:grand-child.marko.input_obj.mjs"));
const $for_content__obj = /*@__PURE__*/ _for_closure(2, ($scope) => $load_GrandChild_tag_input_obj($scope.b, $scope._.d), 5);
const $obj = /*@__PURE__*/ _let(3, ($scope) => {
	$obj_name($scope, $scope.d?.name);
	$for_content__obj($scope);
});
const $obj_name = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$obj($scope, { ...$scope.d });
}));

// grand-child.marko
const $copy = /*@__PURE__*/ _let(5, ($scope) => $copy_name($scope, $scope.f?.name));
const $copy_name = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
const $input_obj = $copy;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$copy($scope, {
		...$scope.f,
		name: $scope.f.name + "!"
	});
}));
