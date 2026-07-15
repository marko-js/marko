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

// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} brief` : undefined;

// tags/panel.marko
const $template$1 = "<p class=note> </p>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $input_note = ($scope, input_note) => _text($scope["#text/0"], input_note);
const $input = ($scope, input) => $input_note($scope, input.note);
enableBranchesPersisted();
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&`)("D l");
const $count = /*@__PURE__*/ _let_persisted("count/3", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$input_note($scope["#childScope/2"], getNote?.($scope.$global.topic));
	$count($scope, 0);
	$setup__script($scope);
}
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
