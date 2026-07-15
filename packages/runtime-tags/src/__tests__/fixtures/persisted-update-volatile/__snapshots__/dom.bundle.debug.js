// template.marko.update.mjs
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	_update_scope(_patch, _live);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// stamp.ts
let n = 0;
const nextStamp = () => ++n;

// template.marko
const $template = "<h1> </h1><div id=stamp>stamp:<!></div><span id=label> </span><button> </button>";
const $walks = "D lDb%lD l D l";
const $count = /*@__PURE__*/ _let_persisted("count/8", ($scope) => _text($scope["#text/4"], $scope.count));
const $label = ($scope, label) => _text($scope["#text/2"], label);
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text($scope["#text/1"], nextStamp());
	$count($scope, 0);
	if (!updating) $label($scope, `label:${nextStamp()}`);
	$setup__script($scope);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
