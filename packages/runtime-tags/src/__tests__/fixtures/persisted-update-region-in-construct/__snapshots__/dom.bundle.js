// tags/sticky.marko.persisted.mjs
const $n = _var_resume("b2", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
const $n_seed = _update_signal("b2");
const $construct$1 = ($scope) => {
	_text($scope.b, $scope.c);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $n_seed, $patch["c"]);
};
_construct("b0", $construct$1);
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a12", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $count_seed = _update_signal("a12");
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a4");
};
const $Beta_content__construct = ($scope) => {
	_construct_child($scope, "b", "b0");
};
const $Beta_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
	if ("b" in $patch) $merge$1($patch["b"], $live["b"]);
	if ("Ad" in $patch) _update_branch($patch, $live, "d", $try_content__update, "a7", "a5");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.d);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("a11", $Beta_content__construct);
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a8", $Beta_content__update, $Beta_content__construct);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a5", "loading…", "b");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// tags/sticky.marko
const $n = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script_update("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
