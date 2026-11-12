// template.marko
const $if_content__$global_brand__script = _fill_global_script("a1", ($scope) => {
	{
		const p = document.querySelector("p");
		p.dataset.log = (p.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, "brand");
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", /* @__PURE__ */ _fill_global("a0", ($scope) => {
	_text($scope.a, $scope.$.brand);
	$if_content__$global_brand__script($scope);
}, "brand"));
const $show = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
