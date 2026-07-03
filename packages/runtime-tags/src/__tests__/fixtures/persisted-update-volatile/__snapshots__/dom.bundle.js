// template.marko
const $count = /* @__PURE__ */ _let(8, ($scope) => _text($scope.e, $scope.i));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, $scope.i + 1);
}));

// template.marko.update.mjs
const $update = (patch, live) => {
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
	if ("c" in patch) _text(live["c"], patch["c"]);
};
var template_marko_update_default = _resume("a0", $update);
