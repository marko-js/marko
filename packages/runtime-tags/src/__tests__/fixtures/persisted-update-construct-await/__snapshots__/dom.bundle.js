// tags/widget.marko.persisted.mjs
const $template$2 = "<button class=widget><!> clicked <!></button>";
const $walks$2 = " D%c%l";
const $clicks = _var_resume("c2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g)));
const $setup__script$2 = _script_shared(($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));
_static_shells({
	"c0": [$template$2, $walks$2],
	"c": [$template$2, $walks$2]
});
const $clicks_seed = _update_signal("c2");
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
_construct("c0", $construct$2);
const $merge$2 = _resume("c0", $update2$2);
_update_content("c", $merge$2, $construct$2);

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
const $Reports_content__walks = "D l%bDb%l", $Reports_content__template = "<h2 class=greeting> </h2><!><p class=footer>updated <!></p>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b b`)($walks$2), $await_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><ul class=reports></ul>`)($template$2);
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$1);
_enable_catch();
const $count = _var_resume("a13", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a5": [$await_content__template, $await_content__walks],
	"a11": [$await_content__template, $await_content__walks],
	"a8": [$try_content__template, $try_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a12": [$Reports_content__template, $Reports_content__walks],
	"a9": [$Reports_content__template, $Reports_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $Reports_content_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Qc": /*@__PURE__*/ _update_text("c")
});
const $count_seed = _update_signal("a13");
const $await_content__construct = ($scope) => {
	_construct_child($scope, "a", "c0");
};
const $await_content__update = ($patch, $live) => {
	if ("a" in $patch) $merge$2($patch["a"], $live["a"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a5");
};
const $Reports_content__update = ($patch, $live) => {
	if ("f" in $patch) $live["f"] = $patch["f"];
	$Reports_content_holes($patch, $live);
	if ("Ab" in $patch) _update_branch($patch, $live, "b", $try_content__update, "a8", "a6");
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
_construct("a5", $await_content__construct);
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a14", $noop_update);
_update_content("a6", $noop_update);
_update_content("a5", $await_content__update);
_update_content("a8", $try_content__update);
_update_content("a9", $Reports_content__update);
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/widget.marko
const $clicks = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$2 = _script_update("c1", ($scope) => _on($scope.a, "click", function() {
	$clicks($scope, $scope.g + 1);
}));

// tags/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "collapse" : "expand"));
const $setup__script$1 = _script_update("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a6", "<p class=loading>crunching numbers…</p>");
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a10", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
