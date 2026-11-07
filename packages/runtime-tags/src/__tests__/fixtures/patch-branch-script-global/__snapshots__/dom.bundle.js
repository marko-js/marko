// template.marko
const $if_content__$global_brand__script = _script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
});
const $if_content__$global_brand = /*@__PURE__*/ _if_closure_patch("a4", 1, 0, $if_content__$global_brand__script);
const $global_brand = _fill_global("a2", ($scope) => {
	$if_content__$global_brand($scope);
	_text($scope.a, $scope.$.brand);
}, "brand");
