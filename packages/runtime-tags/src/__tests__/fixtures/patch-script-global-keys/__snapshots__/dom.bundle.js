// template.marko
const $global_brand__OR__$global_locale = _global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
}, /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("brand")), /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("locale")));
