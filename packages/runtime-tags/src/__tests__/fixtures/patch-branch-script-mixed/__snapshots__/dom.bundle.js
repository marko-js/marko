// template.marko
const $if_content__input_value__OR__$global_brand__script = _script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.g + ":" + $scope.$.brand + "]";
	}
});
const $if_content__input_value__OR__$global_brand = /*@__PURE__*/ _or_patch("a1", 0, $if_content__input_value__OR__$global_brand__script);
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("a6", 1, 0, $if_content__input_value__OR__$global_brand);
const $global_brand = _fill_global("a3", $if_content__$global_brand, "brand");
