// template.marko
const $global_brand__script = _script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$.brand + "]";
	}
});
const $global_brand = _fill_global("a0", ($scope) => {
	$global_brand__script($scope);
	_text($scope.n, $scope.$.brand);
}, "brand");
const $input_label__script = _script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.a2 + ")";
	}
});
