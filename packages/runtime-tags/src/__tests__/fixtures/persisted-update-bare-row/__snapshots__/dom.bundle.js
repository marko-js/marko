// template.marko.persisted.mjs
const $for_content__walks = " b", $for_content__template = "<ul></ul>", $for_content2__walks = "D%c%l", $for_content2__template = "<li><!>: <!></li>";
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
_static_shells({
	"a4": [$for_content2__template, $for_content2__walks],
	"a7": [$for_content2__template, $for_content2__walks],
	"a5": [$for_content__template, $for_content__walks],
	"a8": [$for_content__template, $for_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $for_content2_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a9");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a5");
const $for_content2__update = ($patch, $live) => {
	$for_content2_holes($patch, $live);
	if ("Db" in $patch || "Ab" in $patch) _update_dynamic($patch, $live, "Db", "Ab");
};
const $for_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_for($patch["Aa"], $live["Aa"], $for_content2__update, $live, "Aa", "a4");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.f);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	if ("d" in $patch) $live["d"] = $patch["d"];
	if ("e" in $patch) $live["e"] = $patch["e"];
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a4", $for_content2__update);
_update_content("a5", $for_content__update);
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $PanelB_content = _content_resume("a3", "<strong>B</strong>");
const $PanelA_content = _content_resume("a2", "<strong>A</strong>");
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.f + 1);
}));
