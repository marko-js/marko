// template.marko.persisted.mjs
const $Reports_content__walks = "b%c", $Reports_content__template = "<!><!><!>", $await_content__walks = "D l", $await_content__template = "<p class=report> </p>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a3": [$await_content__template, $await_content__walks],
	"a6": [$await_content__template, $await_content__walks],
	"a7": [$Reports_content__template, $Reports_content__walks],
	"a4": [$Reports_content__template, $Reports_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a8");
const $Reports_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content_holes, "a3");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a1", $construct);
_update_content("a3", $await_content_holes);
_update_content("a4", $Reports_content__update);
const $noop_update = () => {};
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
