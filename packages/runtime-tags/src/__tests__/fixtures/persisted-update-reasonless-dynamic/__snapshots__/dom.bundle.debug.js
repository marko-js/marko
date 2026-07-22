// template.marko.persisted.mjs
const $template = "<button>count <!></button><!><!>";
const $walks = " Db%l%c";
const $Fallback_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=fallback>fallback</p>", "b");
const $Primary_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=primary>primary</p>", "b");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Primary__OR__Fallback = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, pickTemplate($scope.Primary, $scope.Fallback)));
const $Primary = /*@__PURE__*/ _const_persisted("Primary", $Primary__OR__Fallback);
const $Fallback = /*@__PURE__*/ _const_persisted("Fallback", $Primary__OR__Fallback);
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Primary($scope, { content: $Primary_content($scope) });
	if (!updating) $Fallback($scope, { content: $Fallback_content($scope) });
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch || "BranchScopes:#text/2" in $patch) _update_dynamic($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2");
};
const $noop_update = () => {};
_update_content("__tests__/template.marko_2_content", $noop_update);
_update_content("__tests__/template.marko_1_content", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.ts
let count = typeof process === "undefined" ? 0 : Number(process.env.MARKO_REASONLESS_TAG_COUNT || 0);
function pickTemplate(first, second) {
	return ++count % 2 === 1 ? first : second;
}

// template.marko
const $template = "<button>count <!></button><!><!>";
const $walks = " Db%l%c";
const $Fallback_content = /*@__PURE__*/ _content("__tests__/template.marko_2_content", "<p class=fallback>fallback</p>", "b");
const $Primary_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "<p class=primary>primary</p>", "b");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $Primary__OR__Fallback = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, pickTemplate($scope.Primary, $scope.Fallback)));
const $Primary = /*@__PURE__*/ _const_persisted("Primary", $Primary__OR__Fallback);
const $Fallback = /*@__PURE__*/ _const_persisted("Fallback", $Primary__OR__Fallback);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	if (!updating) $Primary($scope, { content: $Primary_content($scope) });
	if (!updating) $Fallback($scope, { content: $Fallback_content($scope) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
