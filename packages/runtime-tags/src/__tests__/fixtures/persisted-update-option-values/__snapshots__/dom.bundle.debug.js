// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for("#select/2", "__tests__/template.marko_1_content/update", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("$params2" in patch) live["$params2"] = patch["$params2"];
	if ("opt" in patch) live["opt"] = patch["opt"];
	if ("opt_id" in patch) live["opt_id"] = patch["opt_id"];
	if ("opt_label" in patch) live["opt_label"] = patch["opt_label"];
	if ("UpdateAttr:value:#option/0" in patch) _attr(live["#option/0"], "value", patch["UpdateAttr:value:#option/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("$pattern" in patch) live["$pattern"] = patch["$pattern"];
	if ("cfg" in patch) live["cfg"] = patch["cfg"];
	if ("cfg_options" in patch) live["cfg_options"] = patch["cfg_options"];
	if ("$global" in patch) live["$global"] = patch["$global"];
	if ("$global_cfg" in patch) live["$global_cfg"] = patch["$global_cfg"];
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
const $for = /* @__PURE__ */ _for_of("#select/2", "<option> </option>", " D l", 0, $for_content__$params);
const $cfg_options = ($scope, cfg_options) => $for($scope, [cfg_options, function(opt) {
	return opt.key;
}]);
const $count = /* @__PURE__ */ _let("count/8", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!_updating()) $pattern2($scope, $scope.$global.cfg);
	$count($scope, 0);
	$setup__script($scope);
}
enableBranches();
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
