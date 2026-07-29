// template.marko.persisted.mjs
const $template = "<h1> </h1><a>link</a><button> </button><section></section>";
const $walks = "D l b D l b";
const $count = _var_resume("a4", /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
}));
const $setup__script = _script_shared(($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
_resume("a5", ($scope) => () => {
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
_static_shells({
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a4");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Qa": /*@__PURE__*/ _update_text("a"),
	"Nhref:b": /*@__PURE__*/ _update_named_attr("b", "href"),
	"Nclass:e": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_attr("e", _attr_class))
});
const $globals_update = _update_signal("a5");
const $construct = ($scope) => {
	_text($scope.d, $scope.f);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("f" in $patch) _update_seed($live, $count_seed, $patch["f"]);
	$_holes($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
	$globals_update($live);
};
_construct("a1", $construct);
const $noop_update = () => {};
_update_content("a6", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(5, ($scope) => {
	_text($scope.d, $scope.f);
	_attr_class($scope.e, $scope.f && $scope.$.params.tag && "hot");
});
const $setup__script = _script_update("a3", ($scope) => _on($scope.c, "click", function() {
	$count($scope, $scope.f + 1);
}));
