// tags/probe.marko
const $template = "<p>probe</p>";
const $setup = [[], []];
_shells({ b: "b,<p>probe</p>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_count = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<p>probe</p>");
	_script($scope0_id, "b0", 0, ($fg__input_label || $fg__input_count) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), (($fg__input_label ? " c" : "") + ($fg__input_count ? " d" : "")).slice(1), "b1", $scope0_reason, 0);
	_scope($scope0_id, {
		c: input.label,
		d: input.count
	}) || ($fg__input_label && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 1)), $fg__input_count && _patch_write($scope0_id, "xd", input.count, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a !a2; D l%;<button> </button><!><!>",
	a1: `a1${_shell_marker([["a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			probe_default({
				label: input.label,
				count
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a0", "g");
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label,
		h: count
	}) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 1));
}, 1);
