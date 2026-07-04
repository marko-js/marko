// tags/chip-list.marko
const $for_content__search_category__OR__cat = /* @__PURE__ */ _or(4, ($scope) => _attr_class_item($scope.a, "chip--active", $scope._.d === $scope.d), 0);
const $for_content__search_category = /* @__PURE__ */ _for_selector(0, 3, 3, $for_content__search_category__OR__cat);
const $for_content__setup = ($scope) => {
	if (!_updating()) $for_content__search_category._($scope);
};
const $for_content__cat = /* @__PURE__ */ _const(3, ($scope) => {
	_text($scope.b, $scope.d);
	$for_content__search_category__OR__cat($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__cat($scope, $params2[0]);
const $for_content_content = _resume("b0", [
	"<span class=chip> </span>",
	" D l",
	$for_content__setup
]);
const $for = /* @__PURE__ */ _for_of(0, $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);

// template.marko
const $count = /* @__PURE__ */ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// tags/chip-list.marko.update.mjs
const $for_update = _update_for(0, "b0", (branch, args) => $for_content__update(args[0], branch));
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("Nclass:a" in patch) _attr_class(live["a"], patch["Nclass:a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $update$1 = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
var chip_list_marko_update_default = _resume("b1", $update$1);

// template.marko.update.mjs
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("c" in patch) chip_list_marko_update_default(patch["c"], live["c"]);
};
var template_marko_update_default = _resume("a0", $update);
