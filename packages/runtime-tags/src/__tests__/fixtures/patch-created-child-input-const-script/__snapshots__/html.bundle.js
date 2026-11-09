// tags/probe.marko
const $template = "<p>probe</p>";
const $setup = [[], []];
_shells({ b: "b,<p>probe</p>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const opts = {
		label: input.label,
		items: []
	};
	_html("<p>probe</p>");
	_script($scope0_id, "b0", 0, $fg__input_label, [
		"c",
		"e",
		"f"
	]);
	_scope($scope0_id, {
		c: input.label,
		e: opts.items,
		f: opts.label
	}) || ($fg__input_label && _patch_write($scope0_id, "xc", input.label, !$sg__input_label), $fg__input_label && _patch_write($scope0_id, "xe", opts.items, !$sg__input_label), $fg__input_label && _patch_write($scope0_id, "xf", opts.label, !$sg__input_label));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			probe_default({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
