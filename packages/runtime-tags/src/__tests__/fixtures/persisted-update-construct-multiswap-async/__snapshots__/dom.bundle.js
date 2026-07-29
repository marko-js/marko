// template.marko.persisted.mjs
const $for_content__walks = "b%c", $for_content__template = "<!><!><!>", $PanelAsync_content__walks = "b%c", $PanelAsync_content__template = "<!><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=report> </p>";
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
_enable_catch();
const $count = _var_resume("a15", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a5": [$await_content__template, $await_content__walks],
	"a12": [$await_content__template, $await_content__walks],
	"a8": [$try_content__template, $try_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a13": [$PanelAsync_content__template, $PanelAsync_content__walks],
	"a9": [$PanelAsync_content__template, $PanelAsync_content__walks],
	"a10": [$for_content__template, $for_content__walks],
	"a14": [$for_content__template, $for_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a15");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a10");
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a5");
};
const $PanelAsync_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a8", "a6");
};
const $for_content__update = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
_construct("a2", $construct);
_update_content("a5", $await_content_holes);
const $noop_update = () => {};
_update_content("a6", $noop_update);
_update_content("a8", $try_content__update);
_update_content("a9", $PanelAsync_content__update);
_update_content("a4", $noop_update);
_update_content("a10", $for_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $await_content__data = ($scope, data) => _text($scope.a, data);
const $await_content__$params = ($scope, $params2) => $await_content__data($scope, $params2[0]);
const $placeholder_content = _content_resume("a6", "<p class=loading>loading…</p>");
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=report> </p>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	if (!updating) $try_content__await_promise($scope, getReport($scope.$.topic));
};
const $PanelAsync_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup);
const $PanelAsync_content__setup = ($scope) => $PanelAsync_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $PanelAsync_content = _content_resume("a9", "<!><!><!>", "b%", $PanelAsync_content__setup);
const $PanelB_content__setup = ($scope) => _text($scope.a, getLabel?.($scope.$.topic));
const $PanelB_content = _content_resume("a4", "<section class=b>B: <!></section>", "Db%", $PanelB_content__setup);
const $PanelA_content__setup = ($scope) => _text($scope.a, getLabel?.($scope.$.topic));
const $PanelA_content = _content_resume("a3", "<span class=a>A: <!></span>", "Db%", $PanelA_content__setup);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a11", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : void 0;
function getReport(topic) {
	if (typeof window !== "undefined") throw new Error("getReport is server-only");
	return resolveAfter(`report for ${topic}`, 1);
}
