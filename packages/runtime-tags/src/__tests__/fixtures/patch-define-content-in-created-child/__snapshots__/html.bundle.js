// tags/wrap.marko
const $template = "<button id=toggle>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button id=toggle>toggle</button><!><!>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.row,
		f: input.label,
		g: open
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.row, !_server_guard($scope0_reason, 1)), _content_withhold(input.row), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb2", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Row = { content: _content_resume("a0", ({ label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0), $scope2_page = _page_render();
		_html(`<em>${_text_resume($scope2_id, "a", label, $wg__label)}</em>`);
		$scope2_page && _write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _patch_child($scope1_id, "a", 0);
			wrap_default({
				row: Row,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		f: _unfilled_if($scope0_reason, 0) && Row
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.label));
}, 1);
