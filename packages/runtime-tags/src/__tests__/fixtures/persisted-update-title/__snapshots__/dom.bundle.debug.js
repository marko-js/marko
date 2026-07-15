// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<button> </button><title></title><p> </p><output></output>";
const $walks = " D l bD lb";
const $count = /*@__PURE__*/ _let_persisted("count/4", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text_content($scope["#title/2"], `App — ${_to_text($scope.$global.docTitle)}`);
	_text($scope["#text/3"], $scope.$global.docTitle);
	$count($scope, 0);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
