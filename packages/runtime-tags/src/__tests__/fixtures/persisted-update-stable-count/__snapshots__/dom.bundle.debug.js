// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("BranchScopes:#nav/2" in _patch) _update_for(_patch["BranchScopes:#nav/2"], _live["BranchScopes:#nav/2"], _update_scope);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// data.js
const CHIPS = [
	"home",
	"tools",
	"toys"
];

// template.marko
const $template = "<button class=count>clicked <!></button><nav></nav>";
const $walks = " Db%l b";
const $for_content__chip = /*@__PURE__*/ _const_persisted("chip", ($scope) => {
	_attr_class_item($scope["#a/0"], "active", $scope.$global.pick === $scope.chip);
	_text($scope["#text/1"], $scope.chip);
});
const $for_content__$params = ($scope, $params2) => $for_content__chip($scope, $params2[0]);
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $for = /*@__PURE__*/ _for_of("#nav/2", "<a class=chip> </a>", " D l", 0, $for_content__$params);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $for($scope, [CHIPS]);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
