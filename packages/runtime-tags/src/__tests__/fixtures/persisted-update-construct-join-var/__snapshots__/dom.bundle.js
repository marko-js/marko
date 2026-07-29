// tags/counter.marko.persisted.mjs
const $template$2 = "<button class=tap>tap <!></button>";
const $walks$2 = " Db%l";
const $n = _var_resume("b2", /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.b, $scope.f);
	_return($scope, $scope.f * 2);
}));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.f + 1);
}));
_static_shells({
	"b0": [$template$2, $walks$2],
	"b": [$template$2, $walks$2]
});
const $n_seed = _update_signal("b2");
const $construct$1 = ($scope) => {
	_text($scope.b, $scope.f);
	_construct_effect($scope, $setup__script$1);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $n_seed, $patch["f"]);
};
_construct("b0", $construct$1);
const $merge$2 = _resume("b0", $update2$2);
_update_content("b", $merge$2, $construct$1);

// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
_static_shells({
	"c1": [$template$1, "D%l"],
	"c": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $merge$1 = _resume("c1", $update2$1);
_update_content("c", $merge$1);

// template.marko.persisted.mjs
const $Tools_content__walks = /*@__PURE__*/ ((_w0) => `0${_w0}&%bD%c%lD l b`)($walks$2), $Tools_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><p class=readout><!> of <!></p><span class=unit> </span><button class=raise>raise</button>`)($template$2);
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $Tools_content__limit = _var_resume("a7", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.e, $scope.h)));
const $Tools_content__setup__script = _script_shared(($scope) => _on($scope.g, "click", function() {
	$Tools_content__limit($scope, $scope.h + 5);
}));
const $Tools_content__tally = _var_resume("a1", ($scope, tally) => _text($scope.d, tally));
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a6": [$Tools_content__template, $Tools_content__walks],
	"a2": [$Tools_content__template, $Tools_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $limit_seed = _update_signal("a7");
const $Tools_content_holes = /*@__PURE__*/ _update_scopes({
	"Qd": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("d")),
	"Qf": /*@__PURE__*/ _update_text("f")
});
const $count_seed = _update_signal("a8");
const $Tools_content__construct = ($scope) => {
	_construct_child($scope, "a", "b0");
	_var($scope, 0, $Tools_content__tally);
	_text($scope.e, $scope.h);
	_construct_effect($scope, $Tools_content__setup__script);
};
const $Tools_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $limit_seed, $patch["h"]);
	$Tools_content_holes($patch, $live);
	if ("a" in $patch) $merge$2($patch["a"], $live["a"]);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_child($scope, "c", "c1");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_construct("a6", $Tools_content__construct);
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a2", $Tools_content__update, $Tools_content__construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/counter.marko
const $n = /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.b, $scope.f);
	_return($scope, $scope.f * 2);
});
const $setup__script$1 = _script_update("b1", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.f + 1);
}));

// template.marko
const $Tools_content__limit = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.e, $scope.h));
const $Tools_content__setup__script = _script_update("a3", ($scope) => _on($scope.g, "click", function() {
	$Tools_content__limit($scope, $scope.h + 5);
}));
const $Tools_content__tally = _var_resume("a1", ($scope, tally) => _text($scope.d, tally));
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
