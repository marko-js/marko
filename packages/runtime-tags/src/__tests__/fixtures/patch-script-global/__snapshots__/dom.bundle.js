// template.marko
const $global_brand_key = /*@__PURE__*/ _global_key("brand");
const $global_brand__script = _global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, /*@__PURE__*/ _global_closure($global_brand_key));
