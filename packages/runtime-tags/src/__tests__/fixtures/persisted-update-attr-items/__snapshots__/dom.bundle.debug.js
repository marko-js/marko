// tags/chip-list.marko.update.mjs
const $update$1 = (_patch, _live) => {
	if ("BranchScopes:#div/0" in _patch) _update_for(_patch["BranchScopes:#div/0"], _live["BranchScopes:#div/0"], _update_scope);
};
const _merge$1 = _resume("__tests__/tags/chip-list.marko_0_update", $update$1);
_update_content("__tests__/tags/chip-list.marko", _merge$1);
function _createPatch$1() {
	return createPatch(_merge$1);
}

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("#childScope/2" in _patch) _merge$1(_patch["#childScope/2"], _live["#childScope/2"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// data.js
function getCategories() {
	if (typeof window !== "undefined") {
		throw new Error("getCategories is server-only");
	}
	return [
		"alpha",
		"beta",
		"gamma"
	];
}

// tags/chip-list.marko
const $template$1 = "<div class=chips></div>";
const $walks$1 = " b";
const $for_content__search_category__OR__cat = /*@__PURE__*/ _or(4, ($scope) => _attr_class_item($scope["#span/0"], "chip--active", $scope._.search_category === $scope.cat));
const $for_content__search_category = /*@__PURE__*/ _for_selector("#div/0", "search_category", "cat", ($scope) => {
	if (!updating) $for_content__search_category__OR__cat($scope);
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__search_category._($scope);
};
const $for_content__cat = /*@__PURE__*/ _const_persisted("cat", ($scope) => {
	_text($scope["#text/1"], $scope.cat);
	$for_content__search_category__OR__cat($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__cat($scope, $params2[0]);
const $pattern2 = ($scope, $pattern) => $search_category($scope, $pattern[0]?.category);
const $search_category = /*@__PURE__*/ _const_persisted("search_category", $for_content__search_category);
const $for = /*@__PURE__*/ _for_of("#div/0", "<span class=chip> </span>", " D l", $for_content__setup, $for_content__$params);
const $categories = ($scope, categories) => {
	if (!updating) $for($scope, [categories, function(cat) {
		return cat;
	}]);
};
function $setup$1($scope) {
	if (!updating) $pattern2($scope, $scope.$global.search);
	if (!updating) $categories($scope, getCategories());
}
enableBranchesPersisted();
var chip_list_default = /*@__PURE__*/ _template("__tests__/tags/chip-list.marko", $template$1, " b", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)(" b");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
