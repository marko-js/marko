// template.marko
const $btn_getter = _el("a0", 0);
const $setup__script = _script("a1", ($scope) => {
	$scope.b ??= 0;
	$btn_getter($scope)().textContent = "after";
});
