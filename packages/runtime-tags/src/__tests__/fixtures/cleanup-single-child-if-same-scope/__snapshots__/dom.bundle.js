// total: 5826 (min) 2697 (brotli)
// template.marko: 261 (min) 172 (brotli)
const $if_content__setup__script = _script("a0", ($scope) => {
	$scope._.b.innerHTML += "\nmounted";
	$signal($scope, 0).onabort = () => {
		$scope._.b.innerHTML += "\ndestroyed";
	};
});
const $if_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$if_content__setup__script($scope);
};
const $if = /* @__PURE__ */ _if(2, "<div>child</div>", "b", $if_content__setup);
const $show__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.d);
}));
const $show = /* @__PURE__ */ _let(3, ($scope) => {
	$if($scope, $scope.d ? 0 : 1);
	$show__script($scope);
});
