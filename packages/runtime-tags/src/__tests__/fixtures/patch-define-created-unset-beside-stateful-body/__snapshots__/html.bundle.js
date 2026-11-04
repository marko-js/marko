// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a7;b%b%b ;<!><!><!><button>toggle</button>",
	a2: `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_open = _updates_from($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_open = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 4), $fg__input_hidden = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label, hidden }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen__OR__hidden = _write_guard($scope2_reason, 0), $ui__isOpen__OR__hidden = _unfilled_if($scope2_reason, 0), $ui__hidden = _unfilled_if($scope2_reason, 3), $ui__isOpen = _unfilled_if($scope2_reason, 1), $fg__label = _filled_guard($scope2_reason, 2), $fg__isOpen = _filled_guard($scope2_reason, 1), $fg__hidden = _filled_guard($scope2_reason, 3);
		_if(() => {
			if (isOpen && !hidden) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", label, 1, $scope2_reason, 2)}</em>`);
				_client_guard($scope2_reason, 2) && _patch_render($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen__OR__hidden, 1, 0, 0, ["a1"], $scope2_reason, 0);
		$fg__label && _client_guard($scope2_reason, 0) && _patch_render($scope2_id, "a0", "e");
		_patch_render($scope2_id, "a4", (($fg__isOpen ? " d" : "") + ($fg__hidden ? " f" : "")).slice(1), $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: ($ui__hidden || $ui__isOpen__OR__hidden) && isOpen,
			e: ($ui__isOpen__OR__hidden || _unfilled_if($scope2_reason, 2)) && label,
			f: ($ui__isOpen || $ui__isOpen__OR__hidden) && hidden
		}) || ($fg__isOpen && $ui__hidden && _patch_write($scope2_id, "xd", isOpen, !_server_guard($scope2_reason, 1)), $fg__label && $ui__isOpen__OR__hidden && _patch_write($scope2_id, "xe", label, !_server_guard($scope2_reason, 2)), $fg__hidden && $ui__isOpen && _patch_write($scope2_id, "xf", hidden, !_server_guard($scope2_reason, 3)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_open << 1 | $uf__input_open << 3 | _updates_from($scope0_reason, 3) << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a5");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a6");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a2"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!",
		hidden: input.hidden
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "a5", "g");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a6", "h");
	_patch_render($scope0_id, "a8", $fg__input_other && "i", $scope0_reason, 4);
	_patch_render($scope0_id, "a9", (($fg__input_label ? " h" : "") + ($fg__input_hidden ? " j" : "") + ($fg__input_other ? " n" : "")).slice(1));
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.open,
		h: input.label,
		j: input.hidden,
		k: open,
		l: _unfilled_if($scope0_reason, 4) && Panel,
		n: Tag
	}) || ($fg__input_open && $ui__input_show && _patch_write($scope0_id, "xg", input.open, !_server_guard($scope0_reason, 2)), $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 3)), $fg__input_hidden && _patch_write($scope0_id, "xj", input.hidden, !_server_guard($scope0_reason, 5)), $fg__input_other && _patch_write($scope0_id, "xn", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
