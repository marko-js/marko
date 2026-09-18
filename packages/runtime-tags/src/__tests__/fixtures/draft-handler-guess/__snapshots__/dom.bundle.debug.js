// template.marko
const $template = "<button id=guess> </button><button id=set>set</button>";
const $walks = " D l b";
const $count = /*@__PURE__*/ _let("count/3", ($scope) => $_shownSource($scope, $scope.count));
const $shown = /*@__PURE__*/ _draft("shown/4", "count/3", ($scope) => _text($scope["#text/1"], $scope.shown));
const $_shownSource = ($scope) => {
	$shown($scope, $scope.count);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$shown($scope, 5, 1);
	});
	_on($scope["#button/2"], "click", function() {
		$count($scope, 3);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
