// template.marko
const $Outer_content__walks = "b%c";
const $Outer_content__template = "<!><!><!>";
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
_shells({
	a: `a !a7;${((_w0) => `b/${_w0}&%b b`)($Outer_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Outer_content__template)}`,
	a2: `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_other = _server_guard($scope0_reason, 4), $fg__input_other = _filled_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $fg__label = _filled_guard($scope1_reason, 1), $cg__isOpen = _client_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "a", label, 1, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_render($scope4_id, "a0");
				_scope($scope4_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope1_reason, 0);
		$fg__label && $cg__isOpen && _patch_render($scope1_id, "a0", "e");
		_write_if($scope1_reason, 0) && _scope($scope1_id, { e: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label }) || $fg__label && $cg__isOpen && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Outer = { content: _content("a6", ({ isOpen, label, show }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__show = _write_guard($scope2_reason, 3), $cg__show = _client_guard($scope2_reason, 3), $fg__isOpen = _filled_guard($scope2_reason, 1), $fg__label2 = _filled_guard($scope2_reason, 2);
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_set_scope_reason(_updates_from($scope2_reason, 1) << 1 | _updates_from($scope2_reason, 2) << 3);
				const $childScope = _peek_scope_id($scope3_id, "a", 0);
				Inner.content({
					isOpen,
					label
				});
				_patch_child_end();
				_client_guard($scope2_reason, 1) && _patch_render($scope3_id, "a4");
				_client_guard($scope2_reason, 2) && _patch_render($scope3_id, "a5");
				_scope($scope3_id, {
					_: _write_if($scope2_reason, 0) && _scope_with_id($scope2_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__show, 1, 0, 0, ["a2"], $scope2_reason, 3);
		$fg__isOpen && $cg__show && _patch_render($scope2_id, "a4", "d");
		$fg__label2 && $cg__show && _patch_render($scope2_id, "a5", "e");
		_write_if($scope2_reason, 3) && _scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 1)) && isOpen,
			e: label
		}) || ($fg__isOpen && $cg__show && _patch_write($scope2_id, "xd", isOpen, !_server_guard($scope2_reason, 1)), $fg__label2 && $cg__show && _patch_write($scope2_id, "xe", label, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 3) << 7);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	Outer.content({
		isOpen: input.open,
		label: input.label,
		show: input.show
	});
	_patch_child_end();
	const Tag = input.other ? "div" : Inner;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 16);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	_patch_render($scope0_id, "a8", $fg__input_other && "i", $scope0_reason, 4);
	_patch_render($scope0_id, "a9", [$fg__input_label && "g", $fg__input_other && "m"]);
	_scope($scope0_id, {
		g: input.label,
		j: open,
		k: _write_if($scope0_reason, 4) && Inner,
		m: Tag,
		a: _existing_scope($childScope2)
	}) || ($fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 2)), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !$sg__input_other));
}, 1);
