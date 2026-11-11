// template.marko
const $Panel_content__walks = "b%bD l";
const $Panel_content__template = "<!><!><span> </span>";
_shells({
	a: "a !a7;b%b%b ;<!><!><!><button>toggle</button>",
	a1: `a1;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&D l`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<span> </span>`)($Panel_content__template, $Panel_content__template)}`,
	a0: "a0;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 0), $fg__input_other = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let open = false;
	const Panel = { content: _content_resume("a2", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $ui__isOpen__OR__label = _unfilled_if($scope2_reason, 0), $fg__label = _filled_guard($scope2_reason, 2), $fg__isOpen = _filled_guard($scope2_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", label, 1, $scope2_reason, 2)}</em>`);
				_scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, _write_guard($scope2_reason, 1), 1, 0, 0, ["a0"], $scope2_reason, 1);
		_html(`<span>${_text_mark($scope2_id, "b", isOpen ? label : "-", 1, $scope2_reason, 0)}</span>`);
		$fg__label && _client_guard($scope2_reason, 1) && _patch_render($scope2_id, "a3", "f");
		_patch_render($scope2_id, "a4", (($fg__isOpen ? " e" : "") + ($fg__label ? " f" : "")).slice(1), $scope2_reason, 0);
		_scope($scope2_id, {
			e: $ui__isOpen__OR__label && isOpen,
			f: $ui__isOpen__OR__label && label
		}) || ($fg__isOpen && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "xe", isOpen, !_server_guard($scope2_reason, 1)), $fg__label && _unfilled_if($scope2_reason, 1) && _patch_write($scope2_id, "xf", label, !_server_guard($scope2_reason, 2)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(64 | ((2 | $uf__input_show) << 1 | $uf__input_show << 3));
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: input.show,
				label: $global$1.brand
			});
			_patch_child_end();
			_set_scope_reason(68);
			const $childScope2 = _peek_scope_id($scope1_id, "b", 1);
			Panel.content({
				isOpen: true,
				label: $global$1.brand
			});
			_patch_child_end();
			_html(`<span>${_text_mark($scope1_id, "c", $global$1.brand, 1, 4, 0)}</span>`);
			_fill_global_subscribe("a5", $scope1_id);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a6");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 16);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	_patch_render($scope0_id, "a8", $fg__input_other && "g", $scope0_reason, 1);
	_patch_render($scope0_id, "a9", (($fg__input_label ? " h" : "") + ($fg__input_other ? " l" : "")).slice(1));
	_scope($scope0_id, {
		h: input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 1) && Panel,
		l: Tag
	}) || ($fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 2)), $fg__input_other && _patch_write($scope0_id, "xl", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
