// template.marko.persisted.mjs
const $if_content__walks = "b", $if_content__template = "<iframe src=about:blank title=embed class=embed></iframe>";
const $template = "<button class=nav>nav <!></button><!><!>";
const $walks = " Db%l%c";
const $nav = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$nav($scope, $scope.g + 1);
}));
_static_shells({
	"a2": [$if_content__template, $if_content__walks],
	"a5": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $nav_seed = _update_signal("a6");
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $nav_seed, $patch["g"]);
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", 0, ["a2"]);
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $nav = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$nav($scope, $scope.g + 1);
}));
