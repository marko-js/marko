// template.marko
const $template = "<span> </span><button class=open>open</button><button class=read>read</button>";
const $walks = "D l b b";
const $live = /*@__PURE__*/ _const("live", ($scope) => _text($scope["#text/0"], $scope.live.open ? "open" : "closed"));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$scope.live.open = true;
	});
	_on($scope["#button/2"], "click", function() {
		console.log("read", $scope.live.open);
	});
});
function $setup($scope) {
	$live($scope, { open: false });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
