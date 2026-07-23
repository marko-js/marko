// template.marko.persisted.mjs
const $template = "<button>count <!></button><!><!>";
const $walks = " Db%l%c";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $if = /*@__PURE__*/ _if("#text/2", "<p class=primary>primary</p>", "b", 0, "<p class=fallback>fallback</p>", "b");
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $if($scope, showPrimary() ? 0 : 1);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
};
_construct("__tests__/template.marko_0_update", $construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.ts
let count = typeof process === "undefined" ? 0 : Number(process.env.MARKO_REASONLESS_IF_COUNT || 0);
function showPrimary() {
	return ++count % 2 === 1;
}

// template.marko
const $template = "<button>count <!></button><!><!>";
const $walks = " Db%l%c";
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $if = /*@__PURE__*/ _if("#text/2", "<p class=primary>primary</p>", "b", 0, "<p class=fallback>fallback</p>", "b");
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $if($scope, showPrimary() ? 0 : 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
