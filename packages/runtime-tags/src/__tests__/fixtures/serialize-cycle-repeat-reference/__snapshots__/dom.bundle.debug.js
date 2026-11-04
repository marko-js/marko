// template.marko
const $template = "<button id=go>go</button><div id=out> </div>";
const $walks = " bD l";
function buildGraph() {
	const a = { id: 1 };
	const b = { id: 2 };
	a.next = b;
	b.prev = a;
	return {
		current: a,
		byId: new Map([[1, a], [2, b]]),
		all: new Set([a, b])
	};
}
const $graph = /*@__PURE__*/ _let("graph/2", ($scope) => {
	$graph_byId($scope, $scope.graph?.byId);
	$graph_current($scope, $scope.graph?.current);
	$graph_all($scope, $scope.graph?.all);
});
const $graph_byId = /*@__PURE__*/ _const("graph_byId");
const $graph_current = /*@__PURE__*/ _const("graph_current");
const $graph_all = /*@__PURE__*/ _const("graph_all");
const $result = /*@__PURE__*/ _let("result/6", ($scope) => _text($scope["#text/1"], $scope.result));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$result($scope, [
		$scope.graph_byId.get(1) === $scope.graph_current,
		$scope.graph_byId.get(2) === $scope.graph_current.next,
		$scope.graph_all.has($scope.graph_current),
		$scope.graph_current.next.prev === $scope.graph_current
	].join(","));
}));
function $setup($scope) {
	$graph($scope, buildGraph());
	$result($scope, "pending");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
