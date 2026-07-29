// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $open = _var_resume("c3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
_static_shells({
	"c1": [$template$1, $walks$1],
	"c": [$template$1, $walks$1]
});
const $open_seed = _update_signal("c3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")) });
const $construct$1 = ($scope) => {
	_construct_effect($scope, $setup__script$1);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	$_holes($patch, $live);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_construct("c1", $construct$1);
const $merge$1 = _resume("c1", $update2$1);
_update_content("c", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $Detail_content__walks = "D l%/&c", $Detail_content__template = "<h2 class=title> </h2><!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a4": [$Detail_content__template, $Detail_content__walks],
	"a2": [$Detail_content__template, $Detail_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $Detail_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
_load_ready("_b", /*@__PURE__*/ _load_idle_trigger()(() => import("./v:gadget.marko.setup.mjs")));
const $count_seed = _update_signal("a5");
const $Detail_content__update = ($patch, $live) => {
	$Detail_content_holes($patch, $live);
	if ("c" in $patch) _update_load($patch["c"], $live["c"], "b0", $live, 1, "b");
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
_construct("a0", $construct);
_update_content("a2", $Detail_content__update);
const $noop_update = () => {};
_update_content("a1", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("c2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));

// tags/gadget.marko.persisted.mjs
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
const $taps = _var_resume("b2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$taps($scope, $scope.g + 1);
}));
function $setup($scope) {
	$taps($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var gadget_marko_persisted_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);
_static_shells({
	"b0": [$template, $walks],
	"b": [$template, $walks]
});
const $taps_seed = _update_signal("b2");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $construct = ($scope) => {
	_text($scope.c, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $taps_seed, $patch["g"]);
	$_holes($patch, $live);
};
_construct("b0", $construct);
const $merge = _resume("b0", $update2);
_update_content("b", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/gadget.marko
const $template = "<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>";
const $walks = "E l Db%m";
const $taps = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script_update("b1", ($scope) => _on($scope.b, "click", function() {
	$taps($scope, $scope.g + 1);
}));
function $setup($scope) {
	$taps($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var gadget_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// tags/v:gadget.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
