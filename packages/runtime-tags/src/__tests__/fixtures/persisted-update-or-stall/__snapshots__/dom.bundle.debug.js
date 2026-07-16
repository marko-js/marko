// template.marko.persisted.mjs
const $template = "<button>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__settings_prefix = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/2"], $scope._.settings_prefix);
	}
});
const $if_content__pair = _var_resume("__tests__/template.marko_1_pair/var", /*@__PURE__*/ _let_persisted("pair/4", ($scope) => _text($scope["#text/0"], $scope.pair)));
const $if_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__pair($scope, $scope.pair + "!");
}));
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__settings_prefix._($scope);
	_text($scope["#text/3"], $scope.$global.info.a);
	$if_content__pair($scope, `${$scope.$global.info.a}-${$scope.$global.info.b}`);
	$if_content__setup__script($scope);
};
const $pattern2 = ($scope, $pattern) => $settings_prefix($scope, $pattern[0]?.prefix);
const $settings_prefix = /*@__PURE__*/ _const_persisted("settings_prefix", $if_content__settings_prefix);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $if = /*@__PURE__*/ _if("#text/2", "<p class=pair> </p><button class=bump>bump</button><p class=combo><!>:<!></p>", "D l bD%c%l", $if_content__setup, "<p class=empty>hidden</p>", "b");
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $pattern2($scope, $scope.$global.settings);
	$count($scope, 0);
	if (!updating) $if($scope, $scope.$global.show ? 0 : 1);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $pair_seed = _update_signal("__tests__/template.marko_1_pair/var");
const $if_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2"),
	"PatchHole:#text/3": /*@__PURE__*/ _update_text("#text/3")
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("pair" in _patch) _update_seed(_live, $pair_seed, _patch["pair"]);
	$if_content_holes(_patch, _live);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("settings_prefix" in _patch) _live["settings_prefix"] = _patch["settings_prefix"];
	if ("ConditionalRenderer:#text/2" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update, 0]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// template.marko
const $template = "<button>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__settings_prefix = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/2"], $scope._.settings_prefix);
	}
});
const $if_content__pair = /*@__PURE__*/ _let_persisted("pair/4", ($scope) => _text($scope["#text/0"], $scope.pair));
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__pair($scope, $scope.pair + "!");
}));
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__settings_prefix._($scope);
	_text($scope["#text/3"], $scope.$global.info.a);
	$if_content__pair($scope, `${$scope.$global.info.a}-${$scope.$global.info.b}`);
	$if_content__setup__script($scope);
};
const $pattern2 = ($scope, $pattern) => $settings_prefix($scope, $pattern[0]?.prefix);
const $settings_prefix = /*@__PURE__*/ _const_persisted("settings_prefix", $if_content__settings_prefix);
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $if = /*@__PURE__*/ _if("#text/2", "<p class=pair> </p><button class=bump>bump</button><p class=combo><!>:<!></p>", "D l bD%c%l", $if_content__setup, "<p class=empty>hidden</p>", "b");
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $pattern2($scope, $scope.$global.settings);
	$count($scope, 0);
	if (!updating) $if($scope, $scope.$global.show ? 0 : 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
