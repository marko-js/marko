// template.marko.persisted.mjs
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));
const $globalviewplainblockquoteWidget_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $Widget_content_holes = /*@__PURE__*/ _update_scopes({ "Qa": /*@__PURE__*/ _update_text("a") });
const $count_seed = _update_signal("a7");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $count_seed, $patch["d"]);
	if ("Dc" in $patch || "Ac" in $patch) _update_dynamic($patch, $live, "Dc", "Ac");
};
_update_content("a3", $globalviewplainblockquoteWidget_content_holes);
_update_content("a2", $Widget_content_holes);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $globalviewplainblockquoteWidget_content__setup = ($scope) => _text($scope.a, getNote?.($scope.$.topic));
const $globalviewplainblockquoteWidget_content = _content_resume("a3", "plain: <!>", "b%b", $globalviewplainblockquoteWidget_content__setup);
const $count = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.d + 1);
}));

// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} notes` : void 0;
