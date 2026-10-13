// template.marko
const $global2__script = _fill_global_script("a2", ($scope) => {
	{
		const g = $scope.$;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
});
_fill_global_join("", "a0", $global2__script);
