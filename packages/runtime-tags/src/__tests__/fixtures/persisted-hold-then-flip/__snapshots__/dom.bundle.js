// template.marko.persisted.mjs
const $for_content__walks = "b%c", $for_content__template = "<em>ROW_MARKUP</em><!><!>";
const $template = "<button class=count>clicked <!></button><ul></ul>";
const $walks = " Db%l b";
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a4": [$for_content__template, $for_content__walks],
	"a6": [$for_content__template, $for_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a7");
const $for_update = _update_for_keyed(2, ($p, $l) => $for_content__update($p, $l), "a4");
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
	if ("Ac" in $patch) $for_update($live, [$patch["Ac"], "M"]);
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a4", $for_content__update);
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $PanelB_content = _content_resume("a3", "<section class=b>B</section>");
const $PanelA_content = _content_resume("a2", "<span class=a>A</span>");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
