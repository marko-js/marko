// template.marko
const $if_content__input_value__$global_brand = _fill_global_script(_filled_id("a0 >g"), ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.g + ":" + $scope.$.brand + "]";
	}
}, "brand");
