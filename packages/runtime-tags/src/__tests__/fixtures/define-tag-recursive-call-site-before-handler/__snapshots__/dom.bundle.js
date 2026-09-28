// template.marko
const $Item_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function(e) {
	e.target.textContent = `clicked ${$scope.f}`;
}));
