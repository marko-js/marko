// template.marko
const $globalviewplainblockquoteWidget_content__setup = ($scope) => _text($scope.a, getNote?.($scope.$.topic));
const $globalviewplainblockquoteWidget_content = _content_resume("a4", "plain: <!>", "b%b", $globalviewplainblockquoteWidget_content__setup);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $count_seed = _update_signal("a2");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("Dc" in patch || "Ac" in patch) _update_dynamic(patch, live, "Dc", "Ac");
};
_update_content("a4", _update_scope);
_update_content("a3", _update_scope);
const _merge = _resume("a5", $update);
function createPatch() {
	return createPatch$1(_merge);
}

// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} notes` : void 0;
