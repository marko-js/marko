// template.marko.persisted.mjs
const $template = "<button> </button><title></title><meta name=description><link rel=canonical><p> </p><output></output>";
const $walks = " D l b b bD lb";
const $count = _var_resume("a2", /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a2");
const $_holes = /*@__PURE__*/ _update_scopes({
	"NtextContent:c": /*@__PURE__*/ _update_attr("c", _text_content),
	"Ncontent:d": /*@__PURE__*/ _update_named_attr("d", "content"),
	"Nhref:e": /*@__PURE__*/ _update_named_attr("e", "href"),
	"Qf": /*@__PURE__*/ _update_text("f")
});
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	$_holes($patch, $live);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script_update("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
