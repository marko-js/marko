// template.marko
const $global_brand_key = /*@__PURE__*/ _global_key(2, "brand");
const $global_brand__script = _script("a0", ($scope) => {
	$global_brand.r($scope);
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
});
const $global_brand = /*@__PURE__*/ _global_closure("a2", $global_brand_key, ($scope) => {
	$global_brand__script($scope);
	_text($scope.a, $scope.$.brand);
});
