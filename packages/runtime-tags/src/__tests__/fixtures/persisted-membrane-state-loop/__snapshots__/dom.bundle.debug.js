// template.marko.persisted.mjs
const $template = "<button class=add>add</button><ul class=items></ul>";
const $walks = " b b";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li> </li>", "D l", 0, $for_content__$params);
const $items = _var_resume("__tests__/template.marko_0_items/var", /*@__PURE__*/ _let_persisted("items/2", ($scope) => $for($scope, [$scope.items, function(item) {
	return item;
}])));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, `c${$scope.items?.length}`]);
}));
function $setup($scope) {
	$items($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $items_seed = _update_signal("__tests__/template.marko_0_items/var");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("items" in $patch) _update_seed($live, $items_seed, $patch["items"]);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button class=add>add</button><ul class=items></ul>";
const $walks = " b b";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#ul/1", "<li> </li>", "D l", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let_persisted("items/2", ($scope) => $for($scope, [$scope.items, function(item) {
	return item;
}]));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, `c${$scope.items?.length}`]);
}));
function $setup($scope) {
	$items($scope, ["a", "b"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
