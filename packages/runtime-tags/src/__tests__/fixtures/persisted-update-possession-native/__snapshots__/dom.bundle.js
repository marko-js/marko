// template.marko
const $globalviewplainblockquoteWidget_content__setup = ($scope) => _text($scope.a, getNote?.($scope.$.topic));
const $globalviewplainblockquoteWidget_content = _content_resume("a1", "plain: <!>", "b%b", $globalviewplainblockquoteWidget_content__setup);
const $count = /*@__PURE__*/ _let(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
enableBranches();

// template.marko.update.mjs
const $count_seed = _update_signal("a4");
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) _update_seed(live, $count_seed, patch["d"]);
	if ("Dc" in patch) _update_dynamic(patch, live, "Dc", "Ac", 0);
};
_update_content("a1", _update_scope);
_update_content("a0", _update_scope);
var template_marko_update_default = _resume("a5", $update);

// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} notes` : void 0;
