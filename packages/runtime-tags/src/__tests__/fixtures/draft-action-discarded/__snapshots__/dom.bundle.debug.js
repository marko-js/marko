// template.marko
const $template = "<button> </button><span> </span>";
const $walks = " D lD l";
const $count = /*@__PURE__*/ _let("count/3", ($scope) => $_shownSource($scope, $scope.count));
const $bump2 = /*@__PURE__*/ _action("bump/6", ($scope) => $bump_pending($scope, $scope.bump.pending));
const $shown = /*@__PURE__*/ _draft("shown/4", "count/3", ($scope) => {
	_text($scope["#text/1"], $scope.shown);
	$bump2($scope, $bump($scope));
});
const $_shownSource = ($scope) => {
	$shown($scope, $scope.count);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.bump().catch(() => {});
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $bump_pending = /*@__PURE__*/ _const("bump_pending", ($scope) => _text($scope["#text/2"], $scope.bump_pending ? "pending" : "idle"));
const $bump = ($scope) => /*@__PURE__*/ _act(function* () {
	$shown($scope, $scope.shown + 1, 1);
	yield rejectAfter(new Error("refused"));
}, 1, $scope, $bump2);
_resumed["__tests__/template.marko_0/bump"] = $bump;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
