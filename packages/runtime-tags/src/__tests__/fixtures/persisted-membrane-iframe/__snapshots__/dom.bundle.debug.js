// template.marko.persisted.mjs
const $template = "<button class=nav>nav <!></button><!><!>";
const $walks = " Db%l%c";
const $nav = _var_resume("__tests__/template.marko_0_nav/var", /*@__PURE__*/ _let_persisted("nav/6", ($scope) => _text($scope["#text/1"], $scope.nav)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$nav($scope, $scope.nav + 1);
}));
function $setup($scope) {
	$nav($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<iframe src=about:blank title=embed class=embed></iframe>", "b");
const $input_embed = ($scope, input_embed) => {
	if (!updating) $if($scope, input_embed ? 0 : 1);
};
const $input = ($scope, input) => $input_embed($scope, input.embed);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $nav_seed = _update_signal("__tests__/template.marko_0_nav/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.nav);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("nav" in $patch) _update_seed($live, $nav_seed, $patch["nav"]);
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", 0, ["__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=nav>nav <!></button><!><!>";
const $walks = " Db%l%c";
const $nav = /*@__PURE__*/ _let_persisted("nav/6", ($scope) => _text($scope["#text/1"], $scope.nav));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$nav($scope, $scope.nav + 1);
}));
function $setup($scope) {
	$nav($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<iframe src=about:blank title=embed class=embed></iframe>", "b");
const $input_embed = ($scope, input_embed) => {
	if (!updating) $if($scope, input_embed ? 0 : 1);
};
const $input = ($scope, input) => $input_embed($scope, input.embed);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
