// template.marko
const $MyButton_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$scope._.a.textContent += `[onClick(${$scope.d})]`;
}));
