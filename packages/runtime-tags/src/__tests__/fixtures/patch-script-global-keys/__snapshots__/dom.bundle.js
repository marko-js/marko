// template.marko
const $global_brand__OR__$global_locale__script = _global_script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
});
_global_join("locale", "a1", _global_join("brand", "a1", /*@__PURE__*/ _or(4, $global_brand__OR__$global_locale__script)));
