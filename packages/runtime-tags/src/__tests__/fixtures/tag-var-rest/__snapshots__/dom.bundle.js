// total: 2950 (min) 1490 (brotli)
// template.marko: 356 (min) 205 (brotli)
const $obj = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.a, JSON.stringify($scope.g));
	(({ a, ...partialObj }) => $partialObj($scope, partialObj))($scope.g);
	$a($scope, $scope.g.a);
	$obj_b($scope, $scope.g.b);
});
const $partialObj = /* @__PURE__ */ _const(8, ($scope) => {
	_text($scope.b, JSON.stringify($scope.i));
	$partialObj_a($scope, $scope.i.a);
});
const $partialObj_a = /* @__PURE__ */ _const(10, ($scope) => _text($scope.e, $scope.k === void 0 ? "removed a" : "didn't remove a"));
const $a = /* @__PURE__ */ _const(7, ($scope) => _text($scope.c, $scope.h));
const $obj_b = /* @__PURE__ */ _const(9, ($scope) => _text($scope.d, $scope.j));
const $setup__script = _script("a0", ($scope) => _on($scope.f, "click", function() {
	$obj($scope, {
		a: 4,
		b: 5,
		d: 6
	});
}));
