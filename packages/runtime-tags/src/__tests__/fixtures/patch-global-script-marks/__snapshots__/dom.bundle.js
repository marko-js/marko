// template.marko
const $global_brand = /*@__PURE__*/ _global_closure("a3", /* @__PURE__ */ _global_key(30, "brand"), ($scope) => {
	$global_brand__script($scope);
	_text($scope.n, $scope.$.brand);
});
const $global_brand__script = _global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$.brand + "]";
	}
}, $global_brand);
const $input_label__script = _script_patch("a0 a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.a2 + ")";
	}
});
