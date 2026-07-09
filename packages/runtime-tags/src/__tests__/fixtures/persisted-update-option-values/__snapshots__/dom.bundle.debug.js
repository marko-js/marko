// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for("#select/2", "__tests__/template.marko_1_content/update", (branch, args) => _update_scope(args[0], branch));
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("BranchScopes:#select/2" in patch) $for_update(live, [patch["BranchScopes:#select/2"], "#LoopKey"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

// template.marko
const $template = "<button>clicked <!></button><select name=sort></select>";
const $walks = " Db%l b";
const $for_content__opt_id = ($scope, opt_id) => _attr($scope["#option/0"], "value", opt_id);
const $for_content__opt_label = ($scope, opt_label) => _text($scope["#text/1"], opt_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__opt_id($scope, $params2[0]?.id);
	$for_content__opt_label($scope, $params2[0]?.label);
};
const $pattern2 = ($scope, $pattern) => $cfg_options($scope, $pattern[0]?.options);
const $for = /*@__PURE__*/ _for_of("#select/2", "<option> </option>", " D l", 0, $for_content__$params);
const $cfg_options = ($scope, cfg_options) => {
	if (!updating) $for($scope, [cfg_options, function(opt) {
		return opt.key;
	}]);
};
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $pattern2($scope, $scope.$global.cfg);
	$count($scope, 0);
	$setup__script($scope);
}
enableBranches();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
