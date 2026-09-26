// tags/countdown-buttons.marko
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function(e) {
	e.target.textContent = "clicked";
}));
