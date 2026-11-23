// template.marko
const $el_getter = _hoist_resume("a0", 0);
const $later_getter = _hoist_resume("a1", 1);
const $setup__script = _script("a2", ($scope) => {
	{
		const get = $el_getter($scope);
		get().dataset.read = "script";
		const getLater = $later_getter($scope);
		getLater().dataset.read = "script";
	}
	_on($scope.c, "click", function() {
		$scope.e().textContent = "clicked";
		$scope.f().textContent = "clicked";
	});
});
