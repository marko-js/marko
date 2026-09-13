// template.marko
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	document.querySelector("main").dataset.clicked = $scope.c;
}));
