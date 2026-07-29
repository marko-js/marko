// tags/frame-doc.marko.persisted.mjs
const $n = _var_resume("b2", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
const $n_seed = _update_signal("b2");
const $construct = ($scope) => {
	_text($scope.b, $scope.c);
	_construct_effect($scope, $setup__script);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $n_seed, $patch["c"]);
};
_construct("b0", $construct);
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1, $construct);

// template.marko.persisted.mjs
const $template = "<!><!><!>";
const $walks = "b%c";
_static_shells({
	"a1": [$template, "b%c"],
	"a": [$template, "b%c"]
});
const $if_content__construct = ($scope) => {
	_construct_child($scope, "a", "b0");
};
const $if_content__update = ($patch, $live) => {
	if ("a" in $patch) $merge$1($patch["a"], $live["a"]);
};
const $update2 = ($patch, $live) => {
	if ("Da" in $patch) _update_if($patch, $live, "Da", "Aa", [$if_content__update], ["a2"]);
};
_construct("a2", $if_content__construct);
_update_content("a2", $if_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/frame-doc.marko
const $n = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script_update("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
