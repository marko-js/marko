// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
const $walks$1 = "D%l";
_static_shells({
	"b1": [$template$1, "D%l"],
	"b": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $Panel_content__walks = " Db%l b b", $Panel_content__template = "<button class=tap>tap <!></button><button class=grow>grow</button><style></style><div class=tinted>styled</div>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $Panel_content__n = _var_resume("a6", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $Panel_content__pad = _var_resume("a7", /*@__PURE__*/ _let_persisted(5, ($scope) => _style_rule_item($scope.d, "--M_a1", $scope.f)));
const $Panel_content__setup__script = _script_shared(($scope) => {
	_on($scope.a, "click", function() {
		$Panel_content__n($scope, $scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$Panel_content__pad($scope, "8px");
	});
});
const $count = _var_resume("a8", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a5": [$Panel_content__template, $Panel_content__walks],
	"a3": [$Panel_content__template, $Panel_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $n_seed = _update_signal("a6");
const $pad_seed = _update_signal("a7");
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "Nstyle0:d": _update_style_item("d", "--M_a0") });
const $count_seed = _update_signal("a8");
const $Panel_content__construct = ($scope) => {
	_text($scope.b, $scope.e);
	_style_shell($scope, "d");
	_style_rule_item($scope.d, "--M_a1", $scope.f);
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $n_seed, $patch["e"]);
	if ("f" in $patch) _update_seed($live, $pad_seed, $patch["f"]);
	$Panel_content_holes($patch, $live);
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
_construct("a5", $Panel_content__construct);
_construct("a2", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a3", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Panel_content__n = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $Panel_content__pad = /*@__PURE__*/ _let_persisted(5, ($scope) => _style_rule_item($scope.d, "--M_a1", $scope.f));
const $Panel_content__setup__script = _script_update("a1", ($scope) => {
	_on($scope.a, "click", function() {
		$Panel_content__n($scope, $scope.e + 1);
	});
	_on($scope.c, "click", function() {
		$Panel_content__pad($scope, "8px");
	});
});
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
