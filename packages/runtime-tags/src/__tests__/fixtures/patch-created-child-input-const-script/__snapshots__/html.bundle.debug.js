// tags/probe.marko
const $template$1 = "<p>probe</p>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko,<p>probe</p>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const opts = {
		label: input.label,
		items: []
	};
	_html("<p>probe</p>");
	_script($scope0_id, "__tests__/tags/probe.marko_0_input_label#2_opts_items#4_opts_label#5", 0, $fg__input_label, [
		"input_label",
		"opts_items",
		"opts_label"
	]);
	_scope($scope0_id, {
		input_label: input.label,
		opts_items: opts.items,
		opts_label: opts.label
	}, "__tests__/tags/probe.marko", 0, {
		input_label: ["input.label"],
		opts_items: ["opts.items", "1:8"],
		opts_label: ["opts.label", "1:8"]
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:opts_items", opts.items, !$sg__input_label), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:opts_label", opts.label, !$sg__input_label));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			probe_default({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
