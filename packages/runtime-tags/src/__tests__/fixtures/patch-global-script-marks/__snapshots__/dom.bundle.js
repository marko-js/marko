// template.marko
const $global_brand_key = /*@__PURE__*/ _global_key(30, "brand");
const $global_brand__script = _script("a1", ($scope) => {
	$global_brand.r($scope);
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$.brand + "]";
	}
});
const $global_brand = /*@__PURE__*/ _global_closure("a3", $global_brand_key, ($scope) => {
	$global_brand__script($scope);
	_text($scope.n, $scope.$.brand);
});
const $input_label__script = _script_patch("a0 a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.a2 + ")";
	}
});
