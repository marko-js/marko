// tags/probe.marko
const $template = "<p>probe</p>";
_shells({ b: "b !b0,<p>probe</p>" });
var probe_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const opts = {
		label: input.label,
		items: []
	};
	_html("<p>probe</p>");
	_script($scope0_id, "b0", 0);
	_patch_effect($scope0_id, "b0", "c e f");
	$scope0_page ? _scope($scope0_id, {
		c: input.label,
		e: opts.items,
		f: opts.label
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "c", input.label), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "e", opts.items), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "f", opts.label));
}, 0, 0);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			probe_default({ label: input.label });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { e: input.label });
}, 1, () => [probe_default]);
