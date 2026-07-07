// template.marko
const $attrs2__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
const $attrs2 = /*@__PURE__*/ _let(4, ($scope) => {
	_attrs($scope, "a", $scope.e);
	$attrs2__script($scope);
});
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.b, $scope.d);
	$attrs2($scope, {
		value: $scope.d,
		valueChange: $attrs($scope)
	});
});
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$attrs2($scope, { type: "text" });
}));
function $attrs($scope) {
	return function(next) {
		$value($scope, next);
	};
}
_resume("a0", $attrs);
