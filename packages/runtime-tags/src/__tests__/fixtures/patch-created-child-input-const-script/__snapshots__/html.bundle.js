// tags/probe.marko
const $template = "<p>probe</p>";
const $setup = [[], []];
_shells({ b: "b,<p>probe</p>" });
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const opts = {
		label: input.label,
		items: []
	};
	_html("<p>probe</p>");
	_script($scope0_id, "b0", 0);
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "c", "e", "f");
	$scope0_page ? _scope($scope0_id, {
		c: input.label,
		e: opts.items,
		f: opts.label
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.label, !$sg__input_label), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", opts.items, !$sg__input_label), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", opts.label, !$sg__input_label));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			probe_default({ label: input.label });
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
