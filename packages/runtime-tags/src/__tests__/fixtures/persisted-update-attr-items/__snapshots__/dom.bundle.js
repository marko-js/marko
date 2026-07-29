// tags/chip-list.marko.persisted.mjs
const $template$1 = "<div class=chips></div>";
const $walks$1 = " b";
_static_shells({ "b0": [$template$1, " b"] });
const $update2$1 = () => {};
const $for_content__update = ($patch, $live) => {
	if ("d" in $patch) $live["d"] = $patch["d"];
};
_update_content("b1", $for_content__update);
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)(" b");
const $count = _var_resume("a3", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a3");
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("Dd" in $patch) _update_region("d")($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
