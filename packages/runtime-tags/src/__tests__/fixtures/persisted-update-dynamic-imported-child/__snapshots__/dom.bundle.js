// tags/roster.marko.persisted.mjs
const $template$2 = "<ul class=roster></ul>";
const $walks$2 = " b";
_static_shells({ "c0": [$template$2, " b"] });
const $update2$2 = () => {};
const $noop_update = () => {};
_update_content("c1", $noop_update);
const $merge$2 = _resume("c0", $update2$2);
_update_content("c", $merge$2);

// tags/digest.marko.persisted.mjs
const $template$1 = "<p class=digest><!> on call: <!></p>";
const $walks$1 = "D%c%l";
_static_shells({ "b0": [$template$1, $walks$1] });
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $template = "<h1> </h1><button class=count>clicked <!></button><!><!><!>";
const $walks = "D l Db%l%b%c";
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.n + 1);
}));
_static_shells({
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $construct = ($scope) => {
	_text($scope.c, $scope.n);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $count_seed, $patch["n"]);
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("l" in $patch) $live["l"] = $patch["l"];
	$_holes($patch, $live);
	if ("Dd" in $patch || "Ad" in $patch) _update_dynamic($patch, $live, "Dd", "Ad");
	if ("De" in $patch || "Ae" in $patch) _update_dynamic($patch, $live, "De", "Ae");
};
_construct("a2", $construct);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.c, $scope.n));
const $setup__script = _script_update("a3", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.n + 1);
}));
