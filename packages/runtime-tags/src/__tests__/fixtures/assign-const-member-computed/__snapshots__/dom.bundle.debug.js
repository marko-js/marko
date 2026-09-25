// template.marko
const $template = "<button class=write>write</button><button class=read>read</button>";
const $walks = " b b";
const $key = /*@__PURE__*/ _const("key");
const $live = /*@__PURE__*/ _const("live");
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.live[$scope.key] = true;
		$scope.live.items[$scope.live.items.length - 1].done = true;
	});
	_on($scope["#button/1"], "click", function() {
		console.log("read", $scope.live.open, $scope.live.items[0].done);
	});
});
function $setup($scope) {
	$key($scope, "open");
	$live($scope, {
		open: false,
		items: [{ done: false }]
	});
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
