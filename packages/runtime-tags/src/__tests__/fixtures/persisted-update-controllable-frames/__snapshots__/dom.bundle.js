// template.marko
_enable_catch();
const $placeholder_content = _content_resume("a2", "loading…", "b");
const $count = /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l));
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));

// template.marko.persisted.mjs
_enable_catch();
const $count = _var_resume("a6", /*@__PURE__*/ _let_persisted(11, ($scope) => _text($scope.b, $scope.l)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.l + 1);
}));
const $await_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a6");
const $_holes = /*@__PURE__*/ _update_scopes({
	"Nvalue:c": /*@__PURE__*/ _update_controllable("c", _update_input_value),
	"Nvalue:d": /*@__PURE__*/ _update_controllable("d", _update_select_value)
});
const $try_content__update = (_patch, _live) => {
	if ("Aa" in _patch) _update_branch(_patch, _live, "a", $await_content_holes);
};
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("l" in _patch) _update_seed(_live, $count_seed, _patch["l"]);
	if ("j" in _patch) _live["j"] = _patch["j"];
	if ("k" in _patch) _live["k"] = _patch["k"];
	$_holes(_patch, _live);
	if ("Ae" in _patch) _update_branch(_patch, _live, "e", $try_content__update);
};
const $noop_update = () => {};
_update_content("a2", $noop_update);
const _merge = _resume("a4", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
