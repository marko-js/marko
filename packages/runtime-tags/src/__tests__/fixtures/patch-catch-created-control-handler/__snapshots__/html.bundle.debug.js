// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fail = _client_guard($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.fail ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_fail ? "__tests__/template.marko_2_input_fail#0:4/init" : "__tests__/template.marko_2_input_fail#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_fail && "__tests__/template.marko_2_input_fail#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_resume($scope1_id, "#text/0", err.message, 1, 4, 0)}</b><input${_attr_input_value($scope1_id, "#input/1", input.label, _resume(function(v) {
			console.log("changed", v);
		}, "__tests__/template.marko_1/valueChange"), "PatchControl:2#input/1", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/1", $scope0_reason, 0)}>${_el_resume($scope1_id, "#input/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_1_input_label#0:3/init" : "__tests__/template.marko_1_input_label#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4", { "ControlledHandler:#input/1": ["valueChange", "8:30"] }), "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:input_fail/6": $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
