// template.marko.persisted.mjs
const $if_content__walks = "b", $if_content__template = "<div class=arrived> arrived</div>";
const $template = "<button class=nav>nav <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__setup__script = _script_shared(($scope) => window.scriptRuns = (window.scriptRuns || 0) + 1);
const $nav = _var_resume("a7", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$nav($scope, $scope.g + 1);
}));
_static_shells({
	"a3": [$if_content__template, $if_content__walks],
	"a6": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $nav_seed = _update_signal("a7");
const $if_content__construct = ($scope) => {
	_construct_effect($scope, $if_content__setup__script);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $nav_seed, $patch["g"]);
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [_update_pair], ["a3"]);
};
_construct("a3", $if_content__construct);
_construct("a1", $construct);
_update_content("a3", _update_pair);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__setup = _script_update("a2", ($scope) => window.scriptRuns = (window.scriptRuns || 0) + 1);
const $nav = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$nav($scope, $scope.g + 1);
}));
