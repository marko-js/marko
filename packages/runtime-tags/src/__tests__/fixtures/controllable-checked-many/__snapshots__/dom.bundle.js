// total: 8172 (min) 3661 (brotli)
// template.marko: 490 (min) 292 (brotli)
const $for_content__checked = /* @__PURE__ */ _let(6, ($scope) => _attr_input_checked($scope, "a", $scope.g, $checkedChange($scope)));
const $for_content__states__OR__state = /* @__PURE__ */ _or(3, ($scope) => $for_content__checked($scope, $scope.c, $valueChange($scope)));
const $for_content__states = /* @__PURE__ */ _for_closure(0, $for_content__states__OR__state);
const $for_content__setup__script = _script("a2", ($scope) => _attr_input_checked_script($scope, "a"));
const $for_content__setup = ($scope) => {
	$for_content__states._($scope);
	$for_content__setup__script($scope);
};
const $for_content__state = /* @__PURE__ */ _const(2, $for_content__states__OR__state);
const $for_content__$params = ($scope, $params2) => $for_content__state($scope, $params2[0]);
const $for = /* @__PURE__ */ _for_of(0, "<input type=checkbox>", " b", $for_content__setup, $for_content__$params);
const $states = /* @__PURE__ */ _let(2, ($scope) => {
	_text($scope.b, $scope.c.join(","));
	$for($scope, [$scope.c]);
	$for_content__states($scope);
});
function $checkedChange($scope) {
	return (_new_checked) => {
		$for_content__checked($scope, _new_checked);
	};
}
function $valueChange($scope) {
	return function(value) {
		if ($scope.M === void 0) throw new Error("LoopKey is undefined");
		const newStates = [...$scope._.c];
		newStates[$scope.M] = value;
		$states($scope._, newStates);
	};
}
_resume("a1", $checkedChange);
_resume("a0", $valueChange);
