// template.marko
const $template = "<span> </span><button class=open>open</button><button class=apply>apply</button>";
const $walks = "D l b b";
const $live__script = _script("__tests__/template.marko_0_live#3", ($scope) => _lifecycle($scope, { onMount: function() {
	document.addEventListener("keydown", () => console.log("key", $scope.live?.open));
} }));
const $live = /*@__PURE__*/ _let("live/3", ($scope) => {
	_text($scope["#text/0"], $scope.live?.open ? "open" : "closed");
	$live__script($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$scope.live.open = true;
	});
	_on($scope["#button/2"], "click", function() {
		$live($scope, { ...$scope.live });
	});
});
function $setup($scope) {
	$live($scope, { open: false });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
