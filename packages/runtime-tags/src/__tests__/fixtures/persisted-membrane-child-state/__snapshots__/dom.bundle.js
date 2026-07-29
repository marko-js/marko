// tags/static-bit.marko.persisted.mjs
const $template$2 = "<span class=static>static</span>";
const $walks$2 = "b";
_static_shells({ "c0": [$template$2, "b"] });
const $update2$2 = () => {};
const $merge$2 = _resume("c0", $update2$2);
_update_content("c", $merge$2);

// tags/stateful-widget.marko.persisted.mjs
const $template$1 = /*@__PURE__*/ ((_w0) => `<b class=widget>count <!></b>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&%b`)("b");
const $count__script = _script_shared(($scope) => window.widgetBump = () => $count($scope, $scope.d + 1) - 1);
const $count = _var_resume("b3", /*@__PURE__*/ _let_persisted(3, ($scope) => {
	_text($scope.a, $scope.d);
	$count__script($scope);
}));
_static_shells({
	"b0": [$template$1, $walks$1],
	"b": [$template$1, $walks$1]
});
const $count_seed = _update_signal("b3");
const $construct$1 = ($scope) => {
	_text($scope.a, $scope.d);
	_construct_effect($scope, $count__script);
};
const $update2$1 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
_construct("b0", $construct$1);
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1, $construct$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $construct = ($scope) => {
	_construct_child($scope, "a", "b0");
};
const $update2 = ($patch, $live) => {
	if ("a" in $patch) $merge$1($patch["a"], $live["a"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/stateful-widget.marko
const $count__script = _script_update("b2", ($scope) => window.widgetBump = () => $count($scope, $scope.d + 1) - 1);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => {
	_text($scope.a, $scope.d);
	$count__script($scope);
});
