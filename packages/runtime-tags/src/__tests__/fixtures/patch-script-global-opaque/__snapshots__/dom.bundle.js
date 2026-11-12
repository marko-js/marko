// template.marko
const $global_key = /*@__PURE__*/ _global_key(1);
const $global2__script = _script("a1", ($scope) => {
	$global2.r($scope);
	{
		const g = $scope.$;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
});
const $global2 = /*@__PURE__*/ _global_closure("a3", $global_key, $global2__script);
