// template.marko
const $template = "<b> </b><i></i><u></u><button>inc</button>";
const $walks = " D l b b b";
const $n = /*@__PURE__*/ _let("n/5", ($scope) => {
	_attr_class_items($scope["#b/0"], {
		on: _global_read($scope.$global, "on"),
		big: $scope.n > 1
	});
	_attr_style_items($scope["#b/0"], {
		color: _global_read($scope.$global, "color"),
		order: $scope.n > 9 ? $scope.n : 0
	});
	_text($scope["#text/1"], $scope.n);
	_attr_class_items($scope["#i/2"], {
		on: _global_read($scope.$global, "on"),
		set: $scope.n
	});
	_attr_class_items($scope["#u/3"], {
		all: $scope.$global,
		set: $scope.n > 0
	});
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/4"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
