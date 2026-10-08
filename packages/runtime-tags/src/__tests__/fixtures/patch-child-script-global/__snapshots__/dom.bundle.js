// tags/badge/index.marko
const $global_brand__script = _fill_global_script("b1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
});
_fill_global_join("brand", "b0", $global_brand__script);
