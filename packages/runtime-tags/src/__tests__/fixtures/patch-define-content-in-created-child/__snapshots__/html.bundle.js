// tags/wrap.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b1"]];
_shells({ b: "b !b1; b%;<button id=toggle>toggle</button><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_row = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_row && _patch_render($scope0_id, "b2", "e");
	$fg__input_label && _patch_render($scope0_id, "b3", "f");
	_patch_fill($scope0_id, "vb4", open, 1);
	_scope($scope0_id, {
		e: input.row,
		f: input.label,
		g: open
	}) || ($fg__input_row && _patch_write($scope0_id, "xe", input.row, !_server_guard($scope0_reason, 1)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("a0", ({ label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0);
		_html(`<em>${_text_mark($scope2_id, "a", label, $wg__label)}</em>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			wrap_default({
				row: Row,
				label: input.label
			});
			_patch_child_end();
			!$cg__input_show && _unfilled_if() && _patch_write($scope0_id, "wf", Row);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 0);
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		f: _unfilled_if($scope0_reason, 0) && Row
	}) || $fg__input_label && $cg__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
