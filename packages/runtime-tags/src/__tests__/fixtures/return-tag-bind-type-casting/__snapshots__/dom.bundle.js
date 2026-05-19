// total: 3222 (min) 1630 (brotli)
// tags/my-let.marko: 83 (min) 74 (brotli)
const $value = /* @__PURE__ */ _let(3, ($scope) => _return($scope, $scope.d));
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("b0", $valueChange);

// template.marko: 170 (min) 133 (brotli)
const $mytag_content__count__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	_var_change($scope._.a, $scope._.d + 1);
}));
const $mytag_content__count = /* @__PURE__ */ _closure_get(3, ($scope) => {
	_text($scope.b, $scope._.d);
	$mytag_content__count__script($scope);
});
const $count__closure = /* @__PURE__ */ _closure($mytag_content__count);
const $count = _var_resume("a0", /* @__PURE__ */ _const(3, $count__closure));
