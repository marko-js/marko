// tags/probe.marko
const $template = "<p>probe</p>";
const $setup = [[], []];
_shells({ b: "b,<p>probe</p>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<p>probe</p>");
	_script($scope0_id, "b0", 0);
	(_filled_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 2)) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? "hb0" : "eb0", _filled_guard($scope0_reason, 1) && "c", _filled_guard($scope0_reason, 2) && "d");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b1");
	_scope($scope0_id, {
		c: input.label,
		d: input.count
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.count, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a !a2; D l%;<button> </button><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			probe_default({
				label: input.label,
				count
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		h: count
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
