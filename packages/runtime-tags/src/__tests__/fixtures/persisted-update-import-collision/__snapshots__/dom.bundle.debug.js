// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("input_id" in _patch) _live["input_id"] = _patch["input_id"];
	if ("ConditionalRenderer:#text/2" in _patch) _update_if(_patch, _live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [_update_scope, 0]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// data.js
function patch(id) {
	return `server patch ${id}`;
}
function live(id) {
	return `server live ${id}`;
}

// template.marko
const $template = "<button>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $if_content__input_id = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => {
	if (!updating) {
		_text($scope["#text/1"], live($scope._.input_id));
		if (!updating) $if_content__label($scope, patch($scope._.input_id));
	}
});
const $if_content__setup = ($scope) => {
	if (!updating) $if_content__input_id._($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", "<p><!> / <!></p>", "D%c%l", $if_content__setup, "<p>nothing selected</p>", "b");
const $input_id = /*@__PURE__*/ _const_persisted("input_id", ($scope) => {
	if (!updating) $if($scope, $scope.input_id ? 0 : 1);
	$if_content__input_id($scope);
});
const $input = ($scope, input) => $input_id($scope, input.id);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
