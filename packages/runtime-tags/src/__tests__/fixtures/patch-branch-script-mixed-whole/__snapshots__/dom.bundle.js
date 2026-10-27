// template.marko
const $if_content__input_value__$global = _fill_global_script("a0", ($scope) => {
	{
		const g = $scope.$;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.g + ":" + g.brand + "]";
	}
}, "");
