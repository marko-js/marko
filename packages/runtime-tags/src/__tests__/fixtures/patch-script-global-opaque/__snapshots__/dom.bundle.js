// template.marko
const $global2__script = _script("a2", ($scope) => {
	{
		const g = $scope.$;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
});
const $global2 = _fill_global("a0", $global2__script, "");
