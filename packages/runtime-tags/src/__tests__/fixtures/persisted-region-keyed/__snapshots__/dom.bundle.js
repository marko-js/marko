// template.marko.persisted.mjs
const $for_content__walks = "D D l%l", $for_content__template = "<article class=item><button class=open> </button><!></article>";
const $template = "<!><!><p class=opens><!> opened</p>";
const $walks = "b%bD%l";
const $for_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$opens($scope._, $scope._.f + 1);
}));
const $opens = _var_resume("a6", /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f)));
_static_shells({
	"a4": [$for_content__template, $for_content__walks],
	"a5": [$for_content__template, $for_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $for_content_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $opens_seed = _update_signal("a6");
const $for_update = _update_for_keyed(0, ($p, $l) => $for_content__update($p, $l), "a4");
const $for_content__construct = ($scope) => {
	_construct_effect($scope, $for_content__setup__script);
};
const $for_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) $live["g"] = $patch["g"];
	$for_content_holes($patch, $live);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.f);
};
const $update2 = ($patch, $live) => {
	if ("f" in $patch) _update_seed($live, $opens_seed, $patch["f"]);
	if ("Aa" in $patch) $for_update($live, [$patch["Aa"], "M"]);
};
_construct("a4", $for_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a7", $noop_update);
_update_content("a4", $for_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $for_content__setup = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$opens($scope._, $scope._.f + 1);
}));
const $opens = /*@__PURE__*/ _let_persisted(5, ($scope) => _text($scope.b, $scope.f));
