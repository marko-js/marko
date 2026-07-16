// tags/layout/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "Close" : "Menu"));
const $setup__script = _script_update("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $layout_content__setup__script = _script_update("a2", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $layout_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.c, $scope._.e));
const $count = /*@__PURE__*/ _let_persisted(4, /* @__PURE__ */ _closure($layout_content__count));

// tags/layout/layout.marko.persisted.mjs
const $open = _var_resume("b3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "Close" : "Menu")));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $open_seed = _update_signal("b3");
const $update2$1 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("g" in _patch) _update_seed(_live, $open_seed, _patch["g"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
const _merge$1 = _resume("b1", $update2$1);
_update_content("b", _merge$1);

// template.marko.persisted.mjs
const $layout_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.e + 1);
}));
const $layout_content__count = /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.c, $scope._.e));
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(4, /* @__PURE__ */ _closure($layout_content__count)));
const $layout_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a3");
const $layout_content__update = (_patch, _live) => {
	_update_pair(_patch, _live);
	$layout_content_holes(_patch, _live);
};
const $update2 = (_patch, _live) => {
	if ("e" in _patch) _update_seed(_live, $count_seed, _patch["e"]);
	if ("a" in _patch) _merge$1(_patch["a"], _live["a"]);
};
_update_content("a0", $layout_content__update);
const _merge = _resume("a1", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
