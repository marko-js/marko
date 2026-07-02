// tags/my-let.marko
const $value = /* @__PURE__ */ _let(3, ($scope) => _return($scope, $scope.d));
function $valueChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("b0", $valueChange);

// template.marko
const $mytag_content__count = /* @__PURE__ */ _closure_get(3, ($scope) => _text($scope.b, $scope._.d));
const $mytag_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	_var_change($scope._.a, $scope._.d + 1);
}));
const $count = _var_resume("a0", /* @__PURE__ */ _const(3, /* @__PURE__ */ _closure($mytag_content__count)));
