// template.marko
const $global_brand__script = _script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
});
const $global_brand = _fill_global("a0", ($scope) => {
	$global_brand__script($scope);
	_text($scope.a, $scope.$.brand);
}, "brand");
