// template.marko
const $if_content__$global_brand = _global_join("brand", "a2", /*@__PURE__*/ _if_closure(1, 0, _global_script("a3", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
})));
