// template.marko
const $global_brand = /*@__PURE__*/ _global_closure("a2", /* @__PURE__ */ _global_key(2, "brand"), ($scope) => {
	$global_brand__script($scope);
	_text($scope.a, $scope.$.brand);
});
const $global_brand__script = _global_script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
}, $global_brand);
