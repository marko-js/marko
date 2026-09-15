// template.marko
const $if_content__input_value__OR__$global_brand = _global_join("brand", "a1", /*@__PURE__*/ _or(0, _global_script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.g + ":" + $scope.$.brand + "]";
	}
})));
