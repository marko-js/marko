// template.marko
const $other__script = _script("a0", ($scope) => _lifecycle($scope, { onUpdate: function() {
	document.getElementById("own").textContent = `own ${$scope.b}`;
} }, 1));
const $other = /*@__PURE__*/ _let(1, $other__script);
const $setup__script = _script("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$other($scope, +$scope.b + 1);
	});
	_lifecycle($scope, {
		onMount: function() {
			document.addEventListener("keydown", () => {
				document.getElementById("listener").textContent = `listener saw ${$scope.b}`;
			});
		},
		onUpdate: function() {
			window.n = (window.n || 0) + 1;
			document.getElementById("runs").textContent = `update ran ${window.n} times`;
		}
	});
});
