// template.marko
const $if_content__$global_brand__script = _fill_global_script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
});
_fill_global_join("brand", "a1", $if_content__$global_brand__script);
const $if_content__$global_brand = _shell_join("a5", /*@__PURE__*/ _fill_global_join("brand", "a1", $if_content__$global_brand__script));
