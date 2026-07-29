// template.marko.persisted.mjs
const $for_content__walks = "b", $for_content__template = "<li>row</li>";
const $template = "<button class=add>add</button><ul class=rows></ul>";
const $walks = " b b";
const $for = /*@__PURE__*/ _for_of(1, $for_content__template, $for_content__walks);
const $items = _var_resume("a4", /*@__PURE__*/ _let_persisted(2, ($scope) => $for($scope, [$scope.c])));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, "x"]);
}));
_static_shells({
	"a1": [$for_content__template, $for_content__walks],
	"a3": [$for_content__template, $for_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $items_seed = _update_signal("a4");
const $construct = ($scope) => {
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $items_seed, $patch["c"]);
};
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a1", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for = /*@__PURE__*/ _for_of(1, "<li>row</li>");
const $items = /*@__PURE__*/ _let_persisted(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, "x"]);
}));
