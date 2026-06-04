// total: 6231 (min) 2790 (brotli)
// template.marko: 483 (min) 204 (brotli)
const $if_content__x = /* @__PURE__ */ _if_closure(0, 0, _script("a0", ($scope) => _lifecycle($scope, {
	onMount: function() {
		document.getElementById("ref").textContent = "Mount " + $scope._.d;
	},
	onUpdate: function() {
		document.getElementById("ref").textContent = "Update " + $scope._.d;
	},
	onDestroy: function() {
		document.getElementById("ref").textContent = "Destroy";
	}
})));
const $if_content__setup = $if_content__x;
const $x__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$x($scope, $scope.d + 1);
}));
const $x = /* @__PURE__ */ _let(3, ($scope) => {
	$if_content__x($scope);
	$x__script($scope);
});
const $if = /* @__PURE__ */ _if(0, 0, 0, $if_content__setup);
const $show__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$show($scope, !$scope.e);
}));
const $show = /* @__PURE__ */ _let(4, ($scope) => {
	$if($scope, $scope.e ? 0 : 1);
	$show__script($scope);
});
