// template.marko
const $if_content__$global_brand = /*@__PURE__*/ _global_if("a3", /* @__PURE__ */ _global_key(4, "brand"), 1, 0, ($scope) => {
	_text($scope.a, $scope.$.brand);
	$if_content__$global_brand__script($scope);
});
const $if_content__$global_brand__script = _global_script("a0", ($scope) => {
	{
		const p = document.querySelector("p");
		p.dataset.log = (p.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, $if_content__$global_brand);
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__$global_brand);
const $show = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
