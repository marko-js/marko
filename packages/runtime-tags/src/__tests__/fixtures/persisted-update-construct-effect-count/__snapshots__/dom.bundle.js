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
const $Panel_content__walks = " Db%lD l", $Panel_content__template = "<div class=box>panel <!></div><span class=note> </span>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $Panel_content__count = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._.e));
const $Panel_content__setup__script = _script_shared(($scope) => $scope.a.dataset.runs = String(+($scope.a.dataset.runs || 0) + 1));
const $count__closure = /*@__PURE__*/ _closure($Panel_content__count);
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__closure($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a5": [$Panel_content__template, $Panel_content__walks],
	"a1": [$Panel_content__template, $Panel_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a6");
const $Panel_content__construct = ($scope) => {
	_text($scope.b, $scope._.e);
	_construct_closure($scope, $scope._, $Panel_content__count);
	_construct_effect($scope, $Panel_content__setup__script);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
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
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a1", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Panel_content__count = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.b, $scope._.e));
const $Panel_content__setup__script = _script_update("a2", ($scope) => $scope.a.dataset.runs = String(+($scope.a.dataset.runs || 0) + 1));
const $count__closure = /*@__PURE__*/ _closure($Panel_content__count);
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__closure($scope);
});
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
