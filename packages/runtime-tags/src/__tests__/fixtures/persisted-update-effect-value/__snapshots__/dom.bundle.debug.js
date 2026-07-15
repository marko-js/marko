// template.marko.update.mjs
const $label_update = _update_signal("__tests__/template.marko_0_label/var");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("label" in _patch) $label_update(_live, _patch["label"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update);
_update_content("__tests__/template.marko", _merge);
function _createPatch() {
	return createPatch(_merge);
}

// template.marko
const $template = "<div class=target></div><p class=static>page body</p>";
const $walks = "c";
const $setup = () => {};
const $label__script = _script_update("__tests__/template.marko_0_label", ($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.label;
		el.textContent = `effect saw ${$scope.label}`;
	}
});
const $label = /*@__PURE__*/ _const_persisted("label", $label__script);
const $input_label = ($scope, input_label) => {
	if (!updating) $label($scope, input_label);
};
const $input = ($scope, input) => $input_label($scope, input.label);
enableBranchesPersisted();
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "c", $setup, $input);
