// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a8;b%b%b ;<!><!><!><button>toggle</button>",
	a3: `a3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	a2: "a2 !a0; D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_open = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, hidden, ...rest }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen__OR__hidden = _write_guard($scope2_reason, 0), $fg__rest = _filled_guard($scope2_reason, 3), $fg__isOpen = _filled_guard($scope2_reason, 1), $fg__hidden = _filled_guard($scope2_reason, 2);
		_if(() => {
			if (isOpen && !hidden) {
				const $scope3_id = _scope_id();
				_html(`<em${_attrs(rest, "a", $scope3_id, "em", 0, $scope2_reason, 3)}>${_text_mark($scope3_id, "b", Object.keys(rest).join(), 1, $scope2_reason, 3)}</em>${_el_mark($scope3_id, "a")}`);
				_script($scope3_id, "a0");
				_client_guard($scope2_reason, 3) && _patch_render($scope3_id, "a1");
				_scope($scope3_id, { _: _write_if($scope2_reason, 3) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen__OR__hidden, 1, 0, 0, ["a2"], $scope2_reason, 0);
		$fg__rest && _client_guard($scope2_reason, 0) && _patch_render($scope2_id, "a1", "g");
		_patch_render($scope2_id, "a5", [$fg__isOpen && "d", $fg__hidden && "e"], $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2) || _unfilled_if($scope2_reason, 0)) && isOpen,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && hidden,
			g: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 3)) && rest
		}) || ($fg__isOpen && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "xd", isOpen, !_server_guard($scope2_reason, 1)), $fg__hidden && _unfilled_if($scope2_reason, 1) && _patch_write($scope2_id, "xe", hidden, !_server_guard($scope2_reason, 2)), $fg__rest && _unfilled_if($scope2_reason, 0) && _patch_write($scope2_id, "xg", rest, !_server_guard($scope2_reason, 3)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 3) << 5 | _updates_from($scope0_reason, 3) << 7);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				title: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a6");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a7");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a3"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		title: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a8");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "a6", "g");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a7", "h");
	_patch_render($scope0_id, "a9", $fg__input_other && "i", $scope0_reason, 4);
	_patch_render($scope0_id, "a10", [$fg__input_label && "h", $fg__input_other && "m"]);
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		j: open,
		k: _write_if($scope0_reason, 4) && Panel,
		m: Tag
	}) || ($fg__input_open && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.open, !_server_guard($scope0_reason, 2)), $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 3)), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
