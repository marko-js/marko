// template.marko
const $template = "<button class=write>write</button><button class=read>read</button><p> </p>";
const $walks = " b bD l";
const $live = /*@__PURE__*/ _const("live", ($scope) => $live_nested($scope, $scope.live.nested));
const $live_nested__script = _script("__tests__/template.marko_0_live_nested#4", ($scope) => _on($scope["#button/1"], "click", function() {
	$log($scope, `${$scope.live.open} ${$scope.live_nested.depth} ${$scope.box.count} ${$scope.live.open}`);
}));
const $live_nested = /*@__PURE__*/ _const("live_nested", $live_nested__script);
const $box = /*@__PURE__*/ _let("box/5");
const $log = /*@__PURE__*/ _let("log/6", ($scope) => _text($scope["#text/2"], $scope.log));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.live.open = true;
	$scope.live.nested.depth = 2;
	$scope.box.count++;
}));
function $setup($scope) {
	$live($scope, {
		open: false,
		nested: { depth: 1 }
	});
	$box($scope, { count: 0 });
	$log($scope, "");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
