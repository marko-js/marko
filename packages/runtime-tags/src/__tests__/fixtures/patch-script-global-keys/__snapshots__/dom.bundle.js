// template.marko
const $global_brand = /*@__PURE__*/ _global_closure("a3", /* @__PURE__ */ _global_key(4, "brand"));
const $global_locale = /*@__PURE__*/ _global_closure("a4", /* @__PURE__ */ _global_key(5, "locale"));
const $global_brand__OR__$global_locale__script = _script("a1", ($scope) => {
	$global_brand__OR__$global_locale.r($scope);
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
});
const $global_brand__OR__$global_locale = /*@__PURE__*/ _global_or(1, $global_brand__OR__$global_locale__script, $global_brand, $global_locale);
