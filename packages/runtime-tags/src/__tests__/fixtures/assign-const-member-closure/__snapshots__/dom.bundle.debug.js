// template.marko
const $template = "<button class=open>open</button><button class=read>read</button>";
const $walks = " b b";
const $live__script = _script("__tests__/template.marko_0_live#2", ($scope) => _lifecycle($scope, { onMount: function() {
	document.addEventListener("keydown", () => console.log("key", $scope.live.open));
} }));
const $live = /*@__PURE__*/ _const("live", $live__script);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$scope.live.open = true;
		console.log("click", $scope.live.open);
	});
	_on($scope["#button/1"], "click", function() {
		console.log("read", $scope.live.open);
	});
});
function $setup($scope) {
	$live($scope, { open: false });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
