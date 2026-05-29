// total: 2723 (min) 1388 (brotli)
// template.marko: 174 (min) 126 (brotli)
const $liveCount = /* @__PURE__ */ _let(2, ($scope) => _text($scope.b, $scope.c));
const $count = /* @__PURE__ */ _let(3);
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function(_, el) {
	el.textContent = "" + $count($scope, 1);
}));
function $valueChange($scope) {
	return function(v) {
		$liveCount($scope, v);
	};
}
_resume("a0", $valueChange);
