// tags/probe.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko;D ;<p> </p>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_opts = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let seen = "";
	_html(`<p>${_text_mark($scope0_id, "#text/0", seen, 1, 0, 0, 1)}</p>`);
	_patch_render($scope0_id, "__tests__/tags/probe.marko_0_input_opts#3_input_label#4/setup", [$fg__input_opts && "input_opts", $fg__input_label && "input_label"], $scope0_reason, 0) || _script($scope0_id, "__tests__/tags/probe.marko_0_input_opts#3_input_label#4", 1, ($fg__input_opts || $fg__input_label) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), [$fg__input_opts && "input_opts", $fg__input_label && "input_label"]);
	_scope($scope0_id, {
		input_opts: input.opts,
		input_label: input.label
	}, "__tests__/tags/probe.marko", 0, {
		input_opts: ["input.opts"],
		input_label: ["input.label"]
	}) || ($fg__input_opts && _patch_write($scope0_id, "PatchMarkedWrite:input_opts", input.opts, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D l")};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	probe_default({
		label: input.label,
		opts: {
			kind: "x",
			describe: _resume(function(label) {
				return `${label}!`;
			}, "__tests__/template.marko_0/opts")
		}
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
