// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a8;b%b%b ;<!><!><!><button>toggle</button>",
	a2: `a2 a12;${/*@__PURE__*/ ((_w0) => `b0${_w0}&D l%c`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<b> </b><!><!>`)($Panel_content__template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1);
	_write_guard($scope0_reason, 1);
	const $cg__input_label = _client_guard($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label2 = _filled_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 1), $ui__isOpen__OR__label = _unfilled_if($scope2_reason, 0), $ui__label = _unfilled_if($scope2_reason, 2), $ui__isOpen = _unfilled_if($scope2_reason, 1), $fg__isOpen = _filled_guard($scope2_reason, 1), $fg__label = _filled_guard($scope2_reason, 2);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", label, 1, $scope2_reason, 2)}</em>`);
				_client_guard($scope2_reason, 2) && _patch_render($scope3_id, "a0");
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope2_reason, 1);
		const $return = label + (isOpen ? "Y" : "N");
		_patch_render($scope2_id, "a4", (($fg__isOpen ? " d" : "") + ($fg__label ? " e" : "")).slice(1), $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: ($ui__label || $ui__isOpen__OR__label) && isOpen,
			e: ($ui__isOpen || $ui__isOpen__OR__label || $ui__label) && label
		}) || ($fg__isOpen && $ui__label && _patch_write($scope2_id, "xd", isOpen, !_server_guard($scope2_reason, 1)), $fg__label && $ui__isOpen && _patch_write($scope2_id, "xe", label, !_server_guard($scope2_reason, 2)));
		return $return;
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1);
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0, $ui__input_label && 1);
			let ret = Panel.content({
				isOpen: true,
				label: input.label
			});
			$fg__input_label && _patch_write($scope1_id, "xe", ret, !$sg__input_label);
			$ui__input_label && _var($scope1_id, "b", $childScope, "a5");
			_patch_child_end();
			_html(`<b>${_text_mark($scope1_id, "c", ret, 1, $scope0_reason, 1)}</b>`);
			_if(() => {}, $scope1_id, "d", 1, 1, 0, 0, 1);
			$fg__input_label && _patch_render($scope1_id, "a6", "e");
			$cg__input_label && _patch_render($scope1_id, "a7");
			_scope($scope1_id, {
				e: ret,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a2"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a8");
	$fg__input_label2 && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a7", "g");
	_patch_render($scope0_id, "a9", $fg__input_other && "h", $scope0_reason, 2);
	_patch_render($scope0_id, "a10", (($fg__input_label2 ? " g" : "") + ($fg__input_other ? " l" : "")).slice(1));
	_scope($scope0_id, {
		g: input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 2) && Panel,
		l: Tag
	}) || ($fg__input_label2 && _patch_write($scope0_id, "xg", input.label, !$sg__input_label), $fg__input_other && _patch_write($scope0_id, "xl", Tag, !_server_guard($scope0_reason, 2)));
}, 1);
