// template.marko.persisted.mjs
const $template = "<button class=bump> </button><!><!>";
const $walks = " D l%c";
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a4");
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a6", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
