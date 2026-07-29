// tags/store.marko.persisted.mjs
const $template$3 = "";
const $walks$3 = "";
const $value = _var_resume("c3", /*@__PURE__*/ _let_persisted(0, ($scope) => _return($scope, $scope.a)));
const $setup__script$3 = _script_shared(($scope) => $value($scope, $scope.$.seed));
_static_shells({
	"c1": ["", ""],
	"c": ["", ""]
});
const $value_seed = _update_signal("c3");
const $construct$3 = ($scope) => {
	_construct_effect($scope, $setup__script$3);
};
const $update2$3 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("a" in $patch) _update_seed($live, $value_seed, $patch["a"]);
};
_construct("c1", $construct$3);
const $merge$3 = _resume("c1", $update2$3);
_update_content("c", $merge$3, $construct$3);

// tags/widget.marko.persisted.mjs
const $template$2 = "<button class=widget><!> clicked <!></button>";
const $walks$2 = " D%c%l";
const $clicks = _var_resume("d2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script$2 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
_static_shells({
	"d0": [$template$2, $walks$2],
	"d": [$template$2, $walks$2]
});
const $clicks_seed = _update_signal("d2");
const $_holes$1 = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_text("b") });
const $construct$2 = ($scope) => {
	_text($scope.c, $scope.g);
	_construct_effect($scope, $setup__script$2);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $clicks_seed, $patch["g"]);
	$_holes$1($patch, $live);
};
_construct("d0", $construct$2);
const $merge$2 = _resume("d0", $update2$2);
_update_content("d", $merge$2, $construct$2);

// tags/layout.marko.persisted.mjs
const $template$1 = "<aside><button class=toggle> </button></aside><section><!></section>";
const $walks$1 = "D D mD%l";
const $open = _var_resume("b3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand")));
const $setup__script$1 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
_static_shells({
	"b1": [$template$1, $walks$1],
	"b": [$template$1, $walks$1]
});
const $open_seed = _update_signal("b3");
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
_construct("b1", $construct$1);
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $Dashboard_content__walks = /*@__PURE__*/ ((_w0, _w1) => `D l0${_w0}&%b Db%l/${_w1}&%b b%c`)("", $walks$2), $Dashboard_content__template = /*@__PURE__*/ ((_w0, _w1) => `<h2 class=greeting> </h2>${_w0}<!><button class=bump>tally <!></button>${_w1}<!><ul class=metrics></ul><!><!>`)("", $template$2);
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
const $Dashboard_content__setup__script = _script_shared(($scope) => _on($scope.e, "click", function() {
	_var_change($scope.b, $scope.n + 1);
}));
const $Dashboard_content__tally = _var_resume("a3", /*@__PURE__*/ _const_persisted(13, ($scope) => _text($scope.f, $scope.n)));
const $count = _var_resume("a10", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a9": [$Dashboard_content__template, $Dashboard_content__walks],
	"a6": [$Dashboard_content__template, $Dashboard_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $Dashboard_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a10");
const $Dashboard_content__construct = ($scope) => {
	_construct_child($scope, "b", "c1");
	_var($scope, 1, $Dashboard_content__tally);
	_text($scope.f, $scope.n);
	_construct_child($scope, "g", "d0");
	_construct_effect($scope, $Dashboard_content__setup__script);
};
const $Dashboard_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Dashboard_content_holes($patch, $live);
	if ("b" in $patch) $merge$3($patch["b"], $live["b"]);
	if ("g" in $patch) $merge$2($patch["g"], $live["g"]);
	if ("Di" in $patch) _update_region("i")($patch, $live);
	if ("Dj" in $patch) _update_region("j")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_child($scope, "c", "b1");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_construct("a9", $Dashboard_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a11", $noop_update);
_update_content("a12", $noop_update);
_update_content("a6", $Dashboard_content__update, $Dashboard_content__construct);
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/store.marko
const $value = /*@__PURE__*/ _let_persisted(0, ($scope) => _return($scope, $scope.a));
const $setup__script$3 = _script_refresh("c2", ($scope) => $value($scope, $scope.$.seed));
function $valueChange($scope) {
	return function(next) {
		$value($scope, next + $scope.$.step);
	};
}
_resume("c0", $valueChange);

// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("d1", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $Dashboard_content__setup__script = _script_update("a7", ($scope) => _on($scope.e, "click", function() {
	_var_change($scope.b, $scope.n + 1);
}));
const $Dashboard_content__tally = _var_resume("a3", /*@__PURE__*/ _const_persisted(13, ($scope) => _text($scope.f, $scope.n)));
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a8", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
