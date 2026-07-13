// template.marko.update.mjs
const $mirror_seed = _update_signal("__tests__/template.marko_0_mirror/var");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("mirror" in patch) _update_seed(live, $mirror_seed, patch["mirror"]);
	_update_scope(patch, live);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<button class=take>take</button><p class=mirror><!> in stock</p><p class=server>server says <!></p>";
const $walks = " bD%lDb%l";
const $mirror = /*@__PURE__*/ _let_persisted("mirror/3", ($scope) => _text($scope["#text/1"], $scope.mirror));
const $setup__script = _script_refresh("__tests__/template.marko_0", ($scope) => {
	$mirror($scope, $scope.$global.stock);
	_on($scope["#button/0"], "click", function() {
		$mirror($scope, $scope.mirror - 1);
	});
});
function $setup($scope) {
	_text($scope["#text/2"], $scope.$global.stock);
	$mirror($scope, $scope.$global.stock);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
