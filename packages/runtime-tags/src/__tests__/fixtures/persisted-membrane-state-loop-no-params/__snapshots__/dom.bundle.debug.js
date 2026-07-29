// template.marko.persisted.mjs
const $for_content__walks = "b", $for_content__template = "<li>row</li>";
const $template = "<button class=add>add</button><ul class=rows></ul>";
const $walks = " b b";
const $for = /*@__PURE__*/ _for_of("#ul/1", $for_content__template, $for_content__walks);
const $items = _var_resume("__tests__/template.marko_0_items/var", /*@__PURE__*/ _let_persisted("items/2", ($scope) => $for($scope, [$scope.items])));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, "x"]);
}));
function $setup($scope) {
	$items($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
_static_shells({
	"__tests__/template.marko_1_update": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_1_content": [$for_content__template, $for_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $items_seed = _update_signal("__tests__/template.marko_0_items/var");
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("items" in $patch) _update_seed($live, $items_seed, $patch["items"]);
};
_construct("__tests__/template.marko_0_update", $construct);
const $noop_update = () => {};
_update_content("__tests__/template.marko_1_update", $noop_update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=add>add</button><ul class=rows></ul>";
const $walks = " b b";
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li>row</li>");
const $items = /*@__PURE__*/ _let_persisted("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, "x"]);
}));
function $setup($scope) {
	$items($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
