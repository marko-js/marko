// template.marko
const $template = "<div> </div><p> </p><button>b</button>";
const $walks = " D lD l b";
const $derived = ($scope, derived) => {
	_attr($scope["#div/0"], "id", derived);
	_text($scope["#text/1"], derived);
};
const $n = /*@__PURE__*/ _let("n/4", ($scope) => $derived($scope, _global_read($scope.$global, "msg") + "!" + $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	_text($scope["#text/2"], $scope.$global.msg);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
