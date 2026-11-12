// template.marko
const $global_brand_key = /*@__PURE__*/ _global_key("brand");
const $if_content__setup = _global_script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, /* @__PURE__ */ _global_closure($global_brand_key));
