// template.marko
const $setup__$global_brand__OR__$global_locale = _fill_global_script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
}, "brand", "locale");
