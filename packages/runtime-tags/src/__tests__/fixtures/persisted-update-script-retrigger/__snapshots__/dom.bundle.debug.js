// template.marko.persisted.mjs
const $template = "<button class=take>take</button><p class=mirror><!> in stock</p><p class=server>server says <!></p>";
const $walks = " bD%lDb%l";
const $mirror = _var_resume("__tests__/template.marko_0_mirror/var", /*@__PURE__*/ _let_persisted("mirror/3", ($scope) => _text($scope["#text/1"], $scope.mirror)));
const $setup__script = _script_shared(($scope) => {
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
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $mirror_seed = _update_signal("__tests__/template.marko_0_mirror/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("mirror" in _patch) _update_seed(_live, $mirror_seed, _patch["mirror"]);
	$_holes(_patch, _live);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2() {
	return patch(_merge);
}

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
