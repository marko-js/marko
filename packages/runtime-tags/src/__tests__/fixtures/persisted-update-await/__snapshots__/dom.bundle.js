// template.marko
_enable_catch();
const $for_content__item_name = ($scope, item_name) => _text($scope.a, item_name);
const $for_content__item_price = ($scope, item_price) => _text($scope.b, item_price);
const $for_content__$params = ($scope, $params3) => {
	$for_content__item_name($scope, $params3[0]?.name);
	$for_content__item_price($scope, $params3[0]?.price);
};
const $for_content_content = _resume("a0", [
	"<li><!> costs <!></li>",
	"D%c%l",
	0
]);
const $await_content__for = /* @__PURE__ */ _for_of(0, $for_content_content[0], $for_content_content[1], $for_content_content[2], $for_content__$params);
const $placeholder_content = _content_resume("a2", "loading related…", "b");
const $count = /* @__PURE__ */ _let(10, ($scope) => _text($scope.c, $scope.k));
const $setup__script = _script_update("a4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.k + 1);
}));

// template.marko.update.mjs
const $for_update = _update_for(0, "a0", (branch, args) => $for_content__update(args[0], branch));
const $await_content2__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("a" in patch) _text(live["a"], patch["a"]);
};
const $for_content__update = (patch, live) => {
	if ("c" in patch) live["c"] = patch["c"];
	if ("d" in patch) live["d"] = patch["d"];
	if ("e" in patch) live["e"] = patch["e"];
	if ("f" in patch) live["f"] = patch["f"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("b" in patch) _text(live["b"], patch["b"]);
};
const $await_content__update = (patch, live) => {
	if ("b" in patch) live["b"] = patch["b"];
	if ("c" in patch) live["c"] = patch["c"];
	if ("Aa" in patch) $for_update(live, [patch["Aa"], "M"]);
};
const $try_content__update = (patch, live) => {
	if ("Aa" in patch) {
		const $patchBranch = patch["Aa"], $liveBranch = live["Aa"];
		if ($patchBranch && $liveBranch) $await_content__update($patchBranch, $liveBranch);
	}
};
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("f" in patch) live["f"] = patch["f"];
	if ("g" in patch) live["g"] = patch["g"];
	if ("h" in patch) live["h"] = patch["h"];
	if ("i" in patch) live["i"] = patch["i"];
	if ("j" in patch) live["j"] = patch["j"];
	if ("a" in patch) _text(live["a"], patch["a"]);
	if ("Ad" in patch) {
		const $patchBranch2 = patch["Ad"], $liveBranch2 = live["Ad"];
		if ($patchBranch2 && $liveBranch2) $try_content__update($patchBranch2, $liveBranch2);
	}
	if ("Ae" in patch) {
		const $patchBranch3 = patch["Ae"], $liveBranch3 = live["Ae"];
		if ($patchBranch3 && $liveBranch3) $await_content2__update($patchBranch3, $liveBranch3);
	}
};
var template_marko_update_default = _resume("a1", $update);
