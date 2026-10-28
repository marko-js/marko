// tags/panel.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom(error) {
	throw error;
}
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko_2*content": "__tests__/tags/panel.marko_2*content;D ;<p> </p>",
	"__tests__/tags/panel.marko_1*content": "__tests__/tags/panel.marko_1*content __tests__/tags/panel.marko_1_input_label#0:3/subscribe!__tests__/tags/panel.marko_1",
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko;b%;<!><!><!>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_error__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_error ? "__tests__/tags/panel.marko_2_input_error#0:4/init" : "__tests__/tags/panel.marko_2_input_error#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "4:2"), $cg__input_error && "__tests__/tags/panel.marko_2_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		const text = `${input.label}: ${err.message}`;
		_html(`<button class=inc>${_text_resume($scope1_id, "#text/1", text, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "#text/2", n, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/panel.marko_1");
		$cg__input_label && _patch_write($scope1_id, "PatchWrite:err_message", err?.message, 1);
		$cg__input_label && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_label#0:3_err_message#5/init");
		_patch_fill($scope1_id, "PatchFill:__tests__/tags/panel.marko_fill1", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			err_message: _unfilled_if($scope0_reason, 0) && err?.message,
			n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/panel.marko", "6:4", {
			err_message: ["err.message", "6:11"],
			n: "7:10"
		}), $cg__input_label && "__tests__/tags/panel.marko_1_input_label#0:3/subscribe");
	}, void 0, "__tests__/tags/panel.marko_1*content", "__tests__/tags/panel.marko_2*content", 1, 1, 1);
	_filled_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0/unpatched", input.label) : _patch_write($scope0_id, "PatchWrite:input_label", input.label, 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:input_error/6": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/tags/panel.marko", 0, { input_label: ["input.label"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=rename>rename</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=rename>rename</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = "label";
	_html(`<button class=rename>rename</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	panel_default({
		label,
		error: input.error
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);
