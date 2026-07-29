// template.marko.persisted.mjs
const $if_content__walks = " D l", $if_content__template = "<button class=child> </button>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.e));
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(4, $if_content__count));
_static_shells({
	"a3": [$if_content__template, $if_content__walks],
	"a5": [$if_content__template, $if_content__walks],
	"a1": [$template, "b%c"],
	"a": [$template, "b%c"]
});
const $count_seed = _update_signal("a6");
const $if_content__construct = ($scope) => {
	_text($scope.b, $scope._.e);
	_construct_effect($scope, $if_content__setup__script);
};
const $update2 = ($patch, $live) => {
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [_update_pair], ["a3"]);
};
_construct("a3", $if_content__construct);
_update_content("a3", _update_pair);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.e));
const $if_content__setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(4, $if_content__count);
