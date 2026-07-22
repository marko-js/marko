// template.marko
const $attrs2__render = /*@__PURE__*/ _render(($scope) => _attrs($scope, "a", $scope.e));
const $attrs2__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
const $attrs2 = /*@__PURE__*/ _let(4, ($scope) => {
	$attrs2__render($scope);
	$attrs2__script($scope);
});
const $value__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.d));
const $value = /*@__PURE__*/ _let(3, ($scope) => {
	$value__render($scope);
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
