// template.marko
const $global_brand__script = _global_script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$.brand + "]";
	}
});
const $global_brand = _global_join("brand", "a0", ($scope) => {
	$global_brand__script($scope);
	_text($scope.n, $scope.$.brand);
});
const $input_label__script = _script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.a2 + ")";
	}
});
