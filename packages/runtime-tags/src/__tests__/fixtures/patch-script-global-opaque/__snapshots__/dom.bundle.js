// template.marko
const $global2__script = _fill_global_script("a0", ($scope) => {
	{
		const g = $scope.$;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
}, "");
