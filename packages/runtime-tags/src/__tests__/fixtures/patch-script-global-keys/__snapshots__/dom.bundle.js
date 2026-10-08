// template.marko
const $global_brand__OR__$global_locale__script = _fill_global_script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
});
_fill_global_join("brand", "a1", $global_brand__OR__$global_locale__script);
_fill_global_join("locale", "a1", $global_brand__OR__$global_locale__script);
