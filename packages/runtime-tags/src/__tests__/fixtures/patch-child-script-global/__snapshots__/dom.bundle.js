// tags/badge/index.marko
const $global_brand__script = _fill_global_script("b0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, "brand");
