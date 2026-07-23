// template.marko.persisted.mjs
const $template = "<ul></ul>";
const $walks = " b";
const $for_content__watched = _var_resume("__tests__/template.marko_1_watched/var", /*@__PURE__*/ _let_persisted("watched/7", ($scope) => _text($scope["#text/2"], $scope.watched ? "watching" : "watch")));
const $for_content__setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__watched($scope, !$scope.watched);
}));
const $for_content__setup = ($scope) => {
	$for_content__watched($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__item_id = ($scope, item_id) => _attr($scope["#button/1"], "data-id", item_id);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_name($scope, $params2[0]?.name);
	$for_content__item_id($scope, $params2[0]?.id);
};
const $for = 0;
function $setup($scope) {
	if (!updating) $for($scope, [getItems?.($scope.$global.filter), function(item) {
		return item.id;
	}]);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
const $watched_seed = _update_signal("__tests__/template.marko_1_watched/var");
const $for_content_holes = /*@__PURE__*/ _update_scopes({
	"PatchHole:#text/0": /*@__PURE__*/ _update_text("#text/0"),
	"PatchAttr:data-id:#button/1": /*@__PURE__*/ _update_named_attr("#button/1", "data-id"),
	"PatchHole:#text/2": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("#text/2"))
});
const $for_update = _update_for_keyed("#ul/0", ($p, $l) => $for_content__update($p, $l), "__tests__/template.marko_1_update");
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("watched" in $patch) _update_seed($live, $watched_seed, $patch["watched"]);
	$for_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("BranchScopes:#ul/0" in $patch) $for_update($live, [$patch["BranchScopes:#ul/0"], "#LoopKey"]);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// data.js
const getItems = typeof window === "undefined" ? (filter) => Array.from({ length: filter === "Toys & Games" ? 10 : 50 }, (_, i) => ({
	id: i + 1,
	name: i ? `item ${i + 1}` : "Elite Tool 1"
})) : undefined;

// template.marko
const $template = "<ul></ul>";
const $walks = " b";
const $for_content__watched = /*@__PURE__*/ _let_persisted("watched/7", ($scope) => _text($scope["#text/2"], $scope.watched ? "watching" : "watch"));
const $for_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$for_content__watched($scope, !$scope.watched);
}));
const $for_content__setup = ($scope) => {
	$for_content__watched($scope, false);
	$for_content__setup__script($scope);
};
const $for_content__item_name = ($scope, item_name) => _text($scope["#text/0"], item_name);
const $for_content__item_id = ($scope, item_id) => _attr($scope["#button/1"], "data-id", item_id);
const $for_content__$params = ($scope, $params2) => {
	$for_content__item_name($scope, $params2[0]?.name);
	$for_content__item_id($scope, $params2[0]?.id);
};
const $for = /*@__PURE__*/ _for_of("#ul/0", "<li><span> </span><button> </button></li>", "E l D m", $for_content__setup, $for_content__$params);
function $setup($scope) {
	if (!updating) $for($scope, [getItems?.($scope.$global.filter), function(item) {
		return item.id;
	}]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
