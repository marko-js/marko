// tags/chip-list.marko.update.mjs
const $for_update = _update_for("#div/0", "__tests__/tags/chip-list.marko_1_content/update", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("$params2" in patch) live["$params2"] = patch["$params2"];
	if ("cat" in patch) live["cat"] = patch["cat"];
	if ("UpdateAttr:class:#span/0" in patch) _attr_class(live["#span/0"], patch["UpdateAttr:class:#span/0"]);
	if ("#text/1" in patch) _text(live["#text/1"], patch["#text/1"]);
};
const $update$1 = (patch, live) => {
	if ("$pattern" in patch) live["$pattern"] = patch["$pattern"];
	if ("search" in patch) live["search"] = patch["search"];
	if ("search_category" in patch) live["search_category"] = patch["search_category"];
	if ("categories" in patch) live["categories"] = patch["categories"];
	if ("BranchScopes:#div/0" in patch) $for_update(live, [patch["BranchScopes:#div/0"], "#LoopKey"]);
};
var chip_list_marko_update_default = _resume("__tests__/tags/chip-list.marko_0_update", $update$1);

// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("count" in patch) _update_seed(live, $count_seed, patch["count"]);
	if ("#childScope/2" in patch) chip_list_marko_update_default(patch["#childScope/2"], live["#childScope/2"]);
};
var template_marko_update_default = _resume("__tests__/template.marko_0_update", $update);

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
const $for_content__search_category__OR__cat = /* @__PURE__ */ _or(4, ($scope) => _attr_class_item($scope["#span/0"], "chip--active", $scope._.search_category === $scope.cat));
const $for_content__search_category = /* @__PURE__ */ _for_selector("#div/0", "search_category", "cat", $for_content__search_category__OR__cat);
const $for_content__setup = ($scope) => {
	if (!_updating()) $for_content__search_category._($scope);
};
const $for_content__cat = /* @__PURE__ */ _const("cat", ($scope) => {
	_text($scope["#text/1"], $scope.cat);
	$for_content__search_category__OR__cat($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__cat($scope, $params2[0]);
const $pattern2 = ($scope, $pattern) => $search_category($scope, $pattern[0]?.category);
const $search_category = /* @__PURE__ */ _const("search_category", $for_content__search_category);
const $for = /* @__PURE__ */ _for_of("#div/0", "<span class=chip> </span>", " D l", $for_content__setup, $for_content__$params);
const $categories = ($scope, categories) => $for($scope, [categories, function(cat) {
	return cat;
}]);
function $setup$1($scope) {
	if (!_updating()) $pattern2($scope, $scope.$global.search);
	if (!_updating()) $categories($scope, getCategories());
}
enableBranches();
var chip_list_default = /* @__PURE__ */ _template("__tests__/tags/chip-list.marko", $template$1, " b", $setup$1);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` Db%l/${_w0}&`)(" b");
const $count = /* @__PURE__ */ _let("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	$setup__script($scope);
}
enableBranches();
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
