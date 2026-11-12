// template.marko
const $global_brand__OR__$global_locale = /*@__PURE__*/ _global_or(1, ($scope) => $global_brand__OR__$global_locale__script($scope), /* @__PURE__ */ _global_closure("a3", /* @__PURE__ */ _global_key(4, "brand")), /* @__PURE__ */ _global_closure("a4", /* @__PURE__ */ _global_key(5, "locale")));
const $global_brand__OR__$global_locale__script = _global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
}, $global_brand__OR__$global_locale);
