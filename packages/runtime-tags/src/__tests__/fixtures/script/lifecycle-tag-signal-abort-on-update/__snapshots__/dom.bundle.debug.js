// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count__script = _script("__tests__/template.marko_0_count#2", ($scope) => _lifecycle($scope, { onUpdate: function() {
	const n = $scope.count;
	$signal($scope, 0).onabort = () => console.log("abort", n);
} }));
const $count = /*@__PURE__*/ _let("count/2", ($scope) => {
	$signalReset($scope, 0);
	_text($scope["#text/1"], $scope.count);
	$count__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
