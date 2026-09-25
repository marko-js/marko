// template.marko
const $template = "<span> </span><button>open</button>";
const $walks = "D l b";
const $live__OR__count__script = _script("__tests__/template.marko_0_live#2_count#3", ($scope) => console.log("effect", $scope.count, $scope.live.open));
const $live__OR__count = /*@__PURE__*/ _or(4, $live__OR__count__script);
const $live = /*@__PURE__*/ _const("live", ($scope) => {
	_text($scope["#text/0"], $scope.live.open ? "open" : "closed");
	$live__OR__count($scope);
});
const $count = /*@__PURE__*/ _let("count/3", $live__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$scope.live.open = true;
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$live($scope, { open: false });
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
