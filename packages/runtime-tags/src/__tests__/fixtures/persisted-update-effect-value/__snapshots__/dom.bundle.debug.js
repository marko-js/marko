// template.marko.persisted.mjs
const $template = "<div class=target></div><p class=static>page body</p>";
const $walks = "c";
const $setup = () => {};
const $label__script = _script_shared(($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.label;
		el.textContent = `effect saw ${$scope.label}`;
	}
});
const $label = _var_resume("__tests__/template.marko_0_label/var", /*@__PURE__*/ _const_persisted("label", $label__script));
const $input_label = ($scope, input_label) => {
	if (!updating) $label($scope, input_label);
};
const $input = ($scope, input) => $input_label($scope, input.label);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "c", $setup, $input);
const $label_update = _update_signal("__tests__/template.marko_0_label/var");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("label" in $patch) $label_update($live, $patch["label"]);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "c", $setup, $input);
