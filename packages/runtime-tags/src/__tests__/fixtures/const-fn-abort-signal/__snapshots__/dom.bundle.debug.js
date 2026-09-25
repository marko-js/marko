// template.marko
const $template = "<button id=start>start</button><button id=next>next</button><p> </p>";
const $walks = " b bD l";
const $start2 = /*@__PURE__*/ _const("start");
const $id = /*@__PURE__*/ _let("id/3", ($scope) => {
	$signalReset($scope, 0);
	$start2($scope, $start($scope));
});
const $status = /*@__PURE__*/ _let("status/4", ($scope) => _text($scope["#text/2"], $scope.status));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.start();
	});
	_on($scope["#button/1"], "click", function() {
		$id($scope, +$scope.id + 1);
	});
});
function $setup($scope) {
	$id($scope, 1);
	$status($scope, "idle");
	$setup__script($scope);
}
const $start = ($scope) => function() {
	const myId = $scope.id;
	$signal($scope, 0).onabort = () => {
		$status($scope, "aborted " + myId);
	};
	$status($scope, "started " + myId);
};
_resumed["__tests__/template.marko_0/start"] = $start;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
