// template.marko.persisted.mjs
const $for_content__walks = "D Db%lD m", $for_content__template = "<li class=row><button class=pick>+<!></button><span class=text> </span></li>";
const $template = "<ul class=rows></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__picks = _var_resume("__tests__/template.marko_1_picks/var", /*@__PURE__*/ _let_persisted("picks/6", ($scope) => _text($scope["#text/1"], $scope.picks)));
const $for_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__picks($scope, $scope.picks + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__picks($scope, 0);
	$for_content__setup__script($scope);
};
const $for_content__row_text = ($scope, row_text) => _text($scope["#text/2"], row_text);
const $for_content__$params = ($scope, $params2) => $for_content__row_text($scope, $params2[0]?.text);
const $for = 0;
const $input_rows = ($scope, input_rows) => {
	if (!updating) $for($scope, [input_rows, function(row) {
		return row.id;
	}]);
};
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, " b"],
	"__tests__/template.marko": [$template, " b"]
});
const $picks_seed = _update_signal("__tests__/template.marko_1_picks/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/2": /*@__PURE__*/ _update_text("#text/2") });
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope.picks);
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("picks" in $patch) _update_seed($live, $picks_seed, $patch["picks"]);
	$for_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("BranchScopes:#ul/0" in $patch) $for_update($live, [$patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
_construct("__tests__/template.marko_1_update", $for_content__construct);
_update_content("__tests__/template.marko_1_update", $for_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<ul class=rows></ul>";
const $walks = " b";
const $setup = () => {};
const $for_content__picks = /*@__PURE__*/ _let_persisted("picks/6", ($scope) => _text($scope["#text/1"], $scope.picks));
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$for_content__picks($scope, $scope.picks + 1);
}));
const $for_content__setup = ($scope) => {
	$for_content__picks($scope, 0);
	$for_content__setup__script($scope);
};
const $for_content__row_text = ($scope, row_text) => _text($scope["#text/2"], row_text);
const $for_content__$params = ($scope, $params2) => $for_content__row_text($scope, $params2[0]?.text);
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li class=row><button class=pick>+<!></button><span class=text> </span></li>", "D Db%lD ", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => {
	if (!updating) $for($scope, [input_rows, function(row) {
		return row.id;
	}]);
};
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
