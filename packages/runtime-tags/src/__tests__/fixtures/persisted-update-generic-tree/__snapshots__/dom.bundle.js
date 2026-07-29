// tags/badge.marko.persisted.mjs
const $template$4 = "<span> </span>";
const $walks$4 = " D l";
_static_shells({ "b0": [$template$4, $walks$4] });
const $update2$4 = () => {};
const $merge$4 = _resume("b0", $update2$4);
_update_content("b", $merge$4);

// tags/card.marko.persisted.mjs
const $template$3 = /*@__PURE__*/ ((_w0) => `<section class=card>${_w0}<!><h2> </h2><p> </p></section>`)($template$4);
const $walks$3 = /*@__PURE__*/ ((_w0) => `D/${_w0}&%bD l D m`)($walks$4);
_static_shells({ "c0": [$template$3, $walks$3] });
const $update2$3 = () => {};
const $merge$3 = _resume("c0", $update2$3);
_update_content("c", $merge$3);

// tags/counter.marko.persisted.mjs
const $template$2 = "<button class=counter> </button>";
const $walks$2 = " D l";
const $n = _var_resume("d2", /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c)));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));
_static_shells({
	"d0": [$template$2, $walks$2],
	"d": [$template$2, $walks$2]
});
const $n_seed = _update_signal("d2");
const $construct$2 = ($scope) => {
	_text($scope.b, $scope.c);
	_construct_effect($scope, $setup__script$1);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) _update_seed($live, $n_seed, $patch["c"]);
};
_construct("d0", $construct$2);
const $merge$2 = _resume("d0", $update2$2);
_update_content("d", $merge$2, $construct$2);

// tags/widget.marko.persisted.mjs
const $template$1 = /*@__PURE__*/ ((_w0) => `<div class=widget><em> </em>${_w0}<!></div>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&%l`)($walks$2);
_static_shells({
	"e0": [$template$1, $walks$1],
	"e": [$template$1, $walks$1]
});
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $construct$1 = ($scope) => {
	_construct_child($scope, "b", "d0");
};
const $update2$1 = ($patch, $live) => {
	$_holes($patch, $live);
	if ("b" in $patch) $merge$2($patch["b"], $live["b"]);
};
_construct("e0", $construct$1);
const $merge$1 = _resume("e0", $update2$1);
_update_content("e", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button class=bump>clicked <!></button>${_w0}<!>${_w1}<!>`)($template$3, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` Db%l/${_w0}&%b/${_w1}&%b`)($walks$3, $walks$1);
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.b, $scope.n)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.n + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a3");
const $construct = ($scope) => {
	_text($scope.b, $scope.n);
	_construct_child($scope, "e", "e0");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("n" in $patch) _update_seed($live, $count_seed, $patch["n"]);
	if ("Dd" in $patch) _update_region("d")($patch, $live);
	if ("e" in $patch) $merge$1($patch["e"], $live["e"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/counter.marko
const $n = /*@__PURE__*/ _let_persisted(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script$1 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.c + 1);
}));

// template.marko
const $count = /*@__PURE__*/ _let_persisted(13, ($scope) => _text($scope.b, $scope.n));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.n + 1);
}));
