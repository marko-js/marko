// template.marko
const $if_content__$global_brand__script = _fill_global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, "brand");
