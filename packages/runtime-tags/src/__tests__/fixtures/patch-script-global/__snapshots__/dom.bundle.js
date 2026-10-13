// template.marko
const $global_brand__script = _fill_global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
});
_fill_global_join("brand", "a0", $global_brand__script);
