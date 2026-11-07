// template.marko
const $global_brand__OR__$global_locale__script = _script("a3", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
});
const $global_brand__OR__$global_locale = /*@__PURE__*/ _or_patch("a4", 1, $global_brand__OR__$global_locale__script);
const $global_brand = _fill_global("a1", $global_brand__OR__$global_locale, "brand");
const $global_locale = _fill_global("a2", $global_brand__OR__$global_locale, "locale");
