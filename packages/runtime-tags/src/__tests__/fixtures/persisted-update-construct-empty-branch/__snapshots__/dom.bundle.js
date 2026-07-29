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
const $Panel_content__walks = " b%bD l", $Panel_content__template = "<button class=flip>flip</button><!><span class=badge> </span>", $if_content__walks = "Db%l", $if_content__template = "<p class=msg>msg <!></p>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $if_content__count = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._);
const $Panel_content__if = /*@__PURE__*/ _if(1, $if_content__template, $if_content__walks, $if_content__count);
const $Panel_content__on = _var_resume("a10", /*@__PURE__*/ _let_persisted(3, ($scope) => $Panel_content__if($scope, $scope.d ? 0 : 1)));
const $Panel_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$Panel_content__on($scope, !$scope.d);
}));
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = _var_resume("a11", /*@__PURE__*/ _let_persisted(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__closure($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a1": ["", ""],
	"a7": ["", ""],
	"a2": [$if_content__template, $if_content__walks],
	"a8": [$if_content__template, $if_content__walks],
	"a9": [$Panel_content__template, $Panel_content__walks],
	"a3": [$Panel_content__template, $Panel_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $on_seed = _update_signal("a10");
const $Panel_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a11");
const $if_content__construct = ($scope) => {
	_text($scope.a, $scope._._.e);
	_construct_closure($scope, $scope._._, $if_content__count);
};
const $Panel_content__construct = ($scope) => {
	_construct_effect($scope, $Panel_content__setup__script);
	if ("Db" in $scope) _update_if($scope, $scope, "Db", "Ab", 0, ["a2", "a1"]);
};
const $Panel_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $on_seed, $patch["d"]);
	$Panel_content_holes($patch, $live);
	if ("Ab" in $patch) _update_if_state($patch, $live, "Db", "Ab", [0, 0]);
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
_construct("a2", $if_content__construct);
_construct("a9", $Panel_content__construct);
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a1", $noop_update);
_update_content("a2", $noop_update);
_update_content("a3", $Panel_content__update, $Panel_content__construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__count = /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._);
const $Panel_content__if = /*@__PURE__*/ _if(1, "<p class=msg>msg <!></p>", "Db%", $if_content__count);
const $Panel_content__on = /*@__PURE__*/ _let_persisted(3, ($scope) => $Panel_content__if($scope, $scope.d ? 0 : 1));
const $Panel_content__setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$Panel_content__on($scope, !$scope.d);
}));
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => {
	_text($scope.b, $scope.e);
	$count__closure($scope);
});
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
