// template.marko
var Helper = class Helper {
	static go() {
		Helper.count = (Helper.count || 0) + 1;
	}
};
const $obj_go = /* @__PURE__ */ _const(5, _script("a2", ($scope) => _on($scope.c, "click", $scope.f)));
const $n__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$n($scope, $scope.g + 1);
}));
const $n = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$n__script($scope);
});
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", Helper.go));
function $obj() {}
_resume("a0", $obj);
