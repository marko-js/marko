// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a7;b%b%b ;<!><!><!><button id=t>toggle</button>",
	a2: `a2;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_open = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $fg__label = _filled_guard($scope2_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", label, 1, $scope2_reason, 1)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_render($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope2_reason, 0);
		_script($scope2_id, "a4", $wg__isOpen, $fg__label, "e");
		$fg__label && _client_guard($scope2_reason, 0) && _patch_render($scope2_id, "a0", "e");
		_scope($scope2_id, { e: label }) || $fg__label && _patch_write($scope2_id, "xe", label, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				label: "k"
			});
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 3);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a5");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a6");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: "dyn"
	}, 16);
	_html(`<button id=t>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "a5", "g");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a6", "h");
	_patch_render($scope0_id, "a8", $fg__input_other && "i", $scope0_reason, 4);
	_patch_render($scope0_id, "a9", $fg__input_other && "m");
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.open,
		h: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "xg", input.open, !_server_guard($scope0_reason, 2)), $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 3)), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
