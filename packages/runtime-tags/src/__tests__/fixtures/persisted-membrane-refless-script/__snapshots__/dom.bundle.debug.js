// template.marko.persisted.mjs
const $if_content__walks = "b", $if_content__template = "<div class=arrived> arrived</div>";
const $template = "<button class=nav>nav <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__setup__script = _script_shared(($scope) => window.scriptRuns = (window.scriptRuns || 0) + 1);
const $if_content__setup = $if_content__setup__script;
const $nav = _var_resume("__tests__/template.marko_0_nav/var", /*@__PURE__*/ _let_persisted("nav/6", ($scope) => _text($scope["#text/1"], $scope.nav)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$nav($scope, $scope.nav + 1);
}));
function $setup($scope) {
	$nav($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $nav_seed = _update_signal("__tests__/template.marko_0_nav/var");
const $if_content__construct = ($scope) => {
	_construct_effect($scope, $if_content__setup__script);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.nav);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("nav" in $patch) _update_seed($live, $nav_seed, $patch["nav"]);
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [_update_pair], ["__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_1_update", $if_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_update", _update_pair);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=nav>nav <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => window.scriptRuns = (window.scriptRuns || 0) + 1);
const $if_content__setup = $if_content__setup__script;
const $nav = /*@__PURE__*/ _let_persisted("nav/6", ($scope) => _text($scope["#text/1"], $scope.nav));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$nav($scope, $scope.nav + 1);
}));
function $setup($scope) {
	$nav($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<div class=arrived> arrived</div>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
