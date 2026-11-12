// template.marko
const $global_brand_key = /*@__PURE__*/ _global_key("brand");
const $if_content__$global_brand = /*@__PURE__*/ _global_if($global_brand_key, 1, 0, "a0", ($scope) => _text($scope.a, $scope.$.brand));
const $if_content__$global_brand__script = _global_script("a1", ($scope) => {
	{
		const p = document.querySelector("p");
		p.dataset.log = (p.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, /*@__PURE__*/ _global_closure($global_brand_key));
const $if_content__setup = ($scope) => {
	$if_content__$global_brand__script($scope);
	$if_content__$global_brand($scope);
};
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $show = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
