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
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a4");
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
_construct("a0", $construct);
const $noop_update = () => {};
_update_content("a2", $noop_update);
_update_content("a1", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
