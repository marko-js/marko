// tags/layout/index.marko.persisted.mjs
const $template$1 = "<main class=shell><!></main>";
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
const $layout_content__walks = " Db%lD l", $layout_content__template = "<button class=tap>tap <!></button><p class=info> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $layout_content__n = _var_resume("a5", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $layout_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$layout_content__n($scope, $scope.d + 1);
}));
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a4": [$layout_content__template, $layout_content__walks],
	"a2": [$layout_content__template, $layout_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $n_seed = _update_signal("a5");
const $layout_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a6");
const $layout_content__construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $layout_content__setup__script);
};
const $layout_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $n_seed, $patch["d"]);
	$layout_content_holes($patch, $live);
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
_construct("a4", $layout_content__construct);
_construct("a0", $construct);
_update_content("a2", $layout_content__update, $layout_content__construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $layout_content__n = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $layout_content__setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$layout_content__n($scope, $scope.d + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
