// tags/badge/index.marko
const $global_brand__script = _global_script("b1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$.brand + "]";
	}
});
const $global_brand = _global_join("brand", "b0", ($scope) => {
	$global_brand__script($scope);
	_text($scope.a, $scope.$.brand);
});
