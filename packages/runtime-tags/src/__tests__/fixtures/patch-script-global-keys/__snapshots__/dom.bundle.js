// template.marko
_fill_global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + ":" + $scope.$.locale + "]";
	}
}, "brand", "locale");
