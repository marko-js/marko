// template.marko
const $if_content__setup__script = _script("a0", ($scope) => {
	console.log("script ran");
	$signal($scope, 0).onabort = () => console.log("aborted");
});
const $if_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(1, "<div>shown</div>", "b", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
