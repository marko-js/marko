// child.marko
let $load_GrandChild_tag_input_obj = /* @__PURE__ */ _load_signal(() => import("./v:grand-child.marko.input_obj.mjs"));
const $obj = /* @__PURE__ */ _let(4, ($scope) => {
	$load_GrandChild_tag_input_obj($scope.d, $scope.e);
	$obj_name($scope, $scope.e?.name);
});
const $obj_name = /* @__PURE__ */ _const(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$obj($scope, {
		...$scope.e,
		name: $scope.e?.name + "!"
	});
}));

// grand-child.marko
const $copy = /* @__PURE__ */ _let(5, ($scope) => $copy_name($scope, $scope.f?.name));
const $copy_name = /* @__PURE__ */ _const(6, ($scope) => _text($scope.b, $scope.g));
const $input_obj = $copy;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$copy($scope, {
		...$scope.f,
		name: $scope.f?.name + "?"
	});
}));
