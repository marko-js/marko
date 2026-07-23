// tags/layout/layout.marko.persisted.mjs
const $open = _var_resume("b3", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "Close" : "Menu")));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));
const $open_seed = _update_signal("b3");
const $_holes = /*@__PURE__*/ _update_scopes({ "Qb": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("b")) });
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $open_seed, $patch["g"]);
	$_holes($patch, $live);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $layout_content__setup__script = _script_shared(($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $layout_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.c, $scope._.f));
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(5, /* @__PURE__ */ _closure($layout_content__count)));
const $layout_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a4");
const $layout_content__construct = ($scope) => {
	_text($scope.c, $scope._.f);
};
const $layout_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$layout_content_holes($patch, $live);
};
const $construct = ($scope) => {
	_construct_child($scope, "a", "b1");
};
const $update2 = ($patch, $live) => {
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	if ("a" in $patch) $merge$1($patch["a"], $live["a"]);
};
_construct("a3", $layout_content__construct);
_construct("a0", $construct);
_update_content("a2", $layout_content__update, $layout_content__construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/layout/layout.marko
const $open = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g ? "Close" : "Menu"));
const $setup__script = _script_update("b2", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.g);
}));

// template.marko
const $layout_content__setup__script = _script_update("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope._, $scope._.f + 1);
}));
const $layout_content__count = /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.c, $scope._.f));
const $count = /*@__PURE__*/ _let_persisted(5, /* @__PURE__ */ _closure($layout_content__count));
