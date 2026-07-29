// template.marko.persisted.mjs
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<p class=note>alpha panel</p>", 0, 0, "<p class=note>beta panel</p>");
const $input_mode = ($scope, input_mode) => {
	if (!updating) $if($scope, input_mode === "a" ? 0 : 1);
};
const $input = ($scope, input) => $input_mode($scope, input.mode);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_update", $noop_update);
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<p class=note>alpha panel</p>", 0, 0, "<p class=note>beta panel</p>");
const $input_mode = ($scope, input_mode) => {
	if (!updating) $if($scope, input_mode === "a" ? 0 : 1);
};
const $input = ($scope, input) => $input_mode($scope, input.mode);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
