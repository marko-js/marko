// tags/sticky.marko.persisted.mjs
const $template$1 = "<button class=sticky>s<!></button>";
const $walks$1 = " Db%l";
const $n = _var_resume("b2", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
_static_shells({
	"b0": [$template$1, $walks$1],
	"b": [$template$1, $walks$1]
});
const $n_seed = _update_signal("b2");
const $construct$1 = ($scope) => {
	_text($scope.b, $scope.c);
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $n_seed, $patch["c"]);
};
_construct("b0", $construct$1);
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $Beta_content__walks = /*@__PURE__*/ ((_w0) => `D b/${_w0}&%b%l`)($walks$1), $Beta_content__template = /*@__PURE__*/ ((_w0) => `<section class=b><ul></ul>${_w0}<!><!></section>`)($template$1), $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = " b", $await_content__template = "<div class=reviews></div>";
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
_enable_catch();
const $count = _var_resume("a14", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
_static_shells({
	"a6": [$await_content__template, $await_content__walks],
	"a12": [$await_content__template, $await_content__walks],
	"a9": [$try_content__template, $try_content__walks],
	"a8": [$try_content__template, $try_content__walks],
	"a13": [$Beta_content__template, $Beta_content__walks],
	"a10": [$Beta_content__template, $Beta_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a14");
const $await_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a6");
};
const $Beta_content__construct = ($scope) => {
	_construct_child($scope, "b", "b0");
};
const $Beta_content__update = ($patch, $live) => {
	if ("Da" in $patch) _update_region("a")($patch, $live);
	if ("b" in $patch) $merge$1($patch["b"], $live["b"]);
	if ("Ad" in $patch) _update_branch($patch, $live, "d", $try_content__update, "a9", "a7");
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
_construct("a13", $Beta_content__construct);
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a15", $noop_update);
_update_content("a6", $await_content__update);
_update_content("a7", $noop_update);
_update_content("a9", $try_content__update);
_update_content("a16", $noop_update);
_update_content("a10", $Beta_content__update, $Beta_content__construct);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a7", "loading…");
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a11", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// tags/sticky.marko
const $n = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script_update("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
