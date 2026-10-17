// template.marko
const $if_content__input_value__OR__$global_brand__script = _fill_global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.g + ":" + $scope.$.brand + "]";
	}
}, "brand");
