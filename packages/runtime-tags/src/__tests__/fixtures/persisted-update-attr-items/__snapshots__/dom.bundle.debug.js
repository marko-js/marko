// tags/chip-list.marko.persisted.mjs
const $template$1 = "<div class=chips></div>";
const $walks$1 = " b";
const $for_content__search_category = /*@__PURE__*/ _for_selector("#div/0", "search_category", "cat", ($scope) => {
	if (!updating) {
		_attr_class_item($scope["#span/0"], "chip--active", $scope._.search_category === $scope.cat);
	}
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__search_category._($scope);
};
const $for_content__cat = /*@__PURE__*/ _const_persisted("cat", ($scope) => _text($scope["#text/1"], $scope.cat));
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
var chip_list_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/chip-list.marko", $template$1, " b", $setup$1);
const $update2$1 = () => {};
const $for_content__update = ($patch, $live) => {
	if ("cat" in $patch) $live["cat"] = $patch["cat"];
};
const $merge$1 = _resume("__tests__/tags/chip-list.marko_0_update", $update2$1);
_update_content("__tests__/tags/chip-list.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)(" b");
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/2"]);
	$count($scope, 0);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#childScope/2" in $patch) _update_region("#childScope/2")($patch, $live);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
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
const $for_content__search_category = /*@__PURE__*/ _for_selector("#div/0", "search_category", "cat", ($scope) => {
	if (!updating) {
		_attr_class_item($scope["#span/0"], "chip--active", $scope._.search_category === $scope.cat);
	}
});
const $for_content__setup = ($scope) => {
	if (!updating) $for_content__search_category._($scope);
};
const $for_content__cat = /*@__PURE__*/ _const_persisted("cat", ($scope) => _text($scope["#text/1"], $scope.cat));
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
