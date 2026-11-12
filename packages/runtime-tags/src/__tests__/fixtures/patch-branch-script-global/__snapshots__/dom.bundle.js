// template.marko
const $global_brand_key = /*@__PURE__*/ _global_key(6, "brand");
const $if_content__$global_brand = /*@__PURE__*/ _global_closure("a4", $global_brand_key, ($scope) => $if_content__$global_brand__script($scope));
const $if_content__$global_brand__script = _global_script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, $if_content__$global_brand);
