// template.marko
const $globalviewplainblockquoteWidget_content__setup = ($scope) => _text($scope.a, getNote?.($scope.$.topic));
const $globalviewplainblockquoteWidget_content = _content_resume("a2", "plain: <!>", "b%b", $globalviewplainblockquoteWidget_content__setup);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// template.marko.persisted.mjs
const $count = _var_resume("a5", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $globalviewplainblockquoteWidget_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $Widget_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a5");
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) _update_seed(_live, $count_seed, _patch["d"]);
	if ("Dc" in _patch || "Ac" in _patch) _update_dynamic(_patch, _live, "Dc", "Ac");
};
_update_content("a2", $globalviewplainblockquoteWidget_content_holes);
_update_content("a1", $Widget_content_holes);
const _merge = _resume("a3", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} notes` : void 0;
