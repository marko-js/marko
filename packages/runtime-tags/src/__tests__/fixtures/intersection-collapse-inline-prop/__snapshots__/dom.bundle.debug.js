// template.marko
const $template = "<button>inc</button><div> </div>";
const $walks = " bD l";
const $pos = ($scope, pos) => $pos_x($scope, pos.x);
const $pos_x__OR__scale = ($scope) => {
	_text($scope["#text/1"], $scope.pos_x + $scope.count * 10);
};
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/2", ($scope) => {
	$pos($scope, {
		x: $scope.count,
		y: $scope.count + 1
	});
	$pos_x__OR__scale($scope);
	$count__script($scope);
});
function $setup($scope) {
	$count($scope, 1);
}
const $pos_x = /* @__PURE__ */ _const("pos_x");
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
