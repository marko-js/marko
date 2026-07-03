// template.marko
const $count__OR__$global_params_tag = /* @__PURE__ */ _or(11, ($scope) => _attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot"));
const $count = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.d, $scope.f);
	$count__OR__$global_params_tag($scope);
});
const $setup__script = _script("a2", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));

// template.marko.update.mjs
const $global_params_tag_update = _update_signal("a0");
const $update = (patch, live) => {
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("k" in patch) $global_params_tag_update(live, patch["k"]);
	if ("m" in patch) live["m"] = patch["m"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("Nhref:b" in patch) _attr(live["b"], "href", patch["Nhref:b"]);
};
var template_marko_update_default = _resume("a1", $update);
