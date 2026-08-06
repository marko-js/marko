// template.marko
const $setup__script = _script("a0", ($scope) => {
	{
		const g = $scope.$;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
});
