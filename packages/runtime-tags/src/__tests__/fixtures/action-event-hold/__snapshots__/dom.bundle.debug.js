// template.marko
const $template = "<button id=claimed> </button><button id=unclaimed> </button>";
const $walks = " D l D l";
const $count__script = _script("__tests__/template.marko_0_count#4", ($scope) => {
	{
		const takeOver = (event) => {
			if (event.target.id === "claimed") {
				event[Symbol.for("marko.act")]?.(resolveAfter(0).then(() => $count($scope, $scope.count + 1)));
			}
		};
		document.addEventListener("click", takeOver);
		$signal($scope, 0).onabort = () => document.removeEventListener("click", takeOver);
	}
});
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	$signalReset($scope, 0);
	$_shownSource($scope, $scope.count);
	$count__script($scope);
});
const $bump2 = /*@__PURE__*/ _action("bump/7", ($scope) => $bump_pending($scope, $scope.bump.pending));
const $shown = /*@__PURE__*/ _draft("shown/5", "count/4", ($scope) => {
	_text($scope["#text/1"], $scope.shown);
	$bump2($scope, $bump($scope));
});
const $_shownSource = ($scope) => {
	$shown($scope, $scope.count);
};
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.bump();
	});
	_on($scope["#button/2"], "click", function() {
		$scope.bump();
	});
});
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $bump_pending = /*@__PURE__*/ _const("bump_pending", ($scope) => _text($scope["#text/3"], $scope.bump_pending ? "pending" : "idle"));
const $bump = ($scope) => /*@__PURE__*/ _act(() => {
	$shown($scope, $scope.shown + 1, 1);
}, 0, $scope, $bump2);
_resumed["__tests__/template.marko_0/bump"] = $bump;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
