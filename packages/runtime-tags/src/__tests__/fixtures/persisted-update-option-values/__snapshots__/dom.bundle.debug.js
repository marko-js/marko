// template.marko.persisted.mjs
const $template = "<button>clicked <!></button><select name=sort></select>";
const $walks = " Db%l b";
const $for_content__opt_id = ($scope, opt_id) => _attr($scope["#option/0"], "value", opt_id);
const $for_content__opt_label = ($scope, opt_label) => _text($scope["#text/1"], opt_label);
const $for_content__$params = ($scope, $params2) => {
	$for_content__opt_id($scope, $params2[0]?.id);
	$for_content__opt_label($scope, $params2[0]?.label);
};
const $pattern2 = ($scope, $pattern) => $cfg_options($scope, $pattern[0]?.options);
const $for = 0;
const $cfg_options = ($scope, cfg_options) => {
	if (!updating) $for($scope, [cfg_options, function(opt) {
		return opt.key;
	}]);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $pattern2($scope, $scope.$global.cfg);
	$count($scope, 0);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:value:#option/0": /*@__PURE__*/ _update_named_attr("#option/0", "value"),
	"PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1")
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $for_update = _update_for_keyed("#select/2", ($p, $l) => $for_content_holes($p, $l), "__tests__/template.marko_1_update");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("BranchScopes:#select/2" in $patch) $for_update($live, [$patch["BranchScopes:#select/2"], "#LoopKey"]);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

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
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	if (!updating) $pattern2($scope, $scope.$global.cfg);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
