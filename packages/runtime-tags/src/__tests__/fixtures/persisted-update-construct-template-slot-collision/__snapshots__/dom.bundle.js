// tags/child.marko.persisted.mjs
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_static_shells({ "b0": [$template$1, "b%c"] });
const $update2$1 = () => {};
const $noop_update$1 = () => {};
_update_content("b1", $noop_update$1);
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&%b%c`)("b%c");
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a6");
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
	if ("Df" in $patch || "Af" in $patch) _update_dynamic($patch, $live, "Df", "Af");
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a4", $noop_update);
_update_content("a7", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $globalnativeTag_content = _content_resume("a4", "dynamic");
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
