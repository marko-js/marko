// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a7;b%b%b ;<!><!><!><button>toggle</button>",
	a2: "a2;D%c%;<em><!> <!></em>",
	a3: `a3 >a> >b>;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $uf__input_label = _updates_from($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_open = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2), $fg__input_other = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $ui__isOpen = _unfilled_if($scope1_reason, 0), $fg__label = _filled_guard($scope1_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", label, 1, $scope1_reason, 1)} ${_text_mark($scope2_id, "b", input.label, 2, $scope0_reason, 1)}</em>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0", $cg__input_label);
				_client_guard($scope1_reason, 1) && _patch_render($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a2"], $scope1_reason, 0);
		$fg__label && _client_guard($scope1_reason, 0) && _patch_render($scope1_id, "a1", "e");
		_scope($scope1_id, {
			e: _write_if($scope1_reason, 0) && ($ui__isOpen || _unfilled_if($scope1_reason, 1)) && label,
			_: _scope_with_id($scope0_id)
		}) || $fg__label && $ui__isOpen && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | $uf__input_label << 3);
			const $childScope = _peek_scope_id($scope3_id, "a", 0, 0, $scope0_id);
			Panel.content({
				isOpen: input.open,
				label: input.label
			});
			_patch_child_end();
			_set_scope_reason($uf__input_label << 3);
			const $childScope2 = _peek_scope_id($scope3_id, "b", 1, 0, $scope0_id);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			$cg__input_label && _patch_render($scope3_id, "a5");
			_client_guard($scope0_reason, 3) && _patch_render($scope3_id, "a6");
			_scope($scope3_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a3"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 16);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a7");
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "a5", "f");
	$fg__input_open && $cg__input_show && _patch_render($scope0_id, "a6", "h");
	_patch_render($scope0_id, "a9", $fg__input_other && "i", $scope0_reason, 4);
	_patch_render($scope0_id, "a10", (($fg__input_label ? " f" : "") + ($fg__input_other ? " m" : "")).slice(1));
	_scope($scope0_id, {
		f: input.label,
		h: _write_if($scope0_reason, 2) && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.open,
		j: open,
		k: _unfilled_if($scope0_reason, 4) && Panel,
		m: Tag,
		o: _write_if($scope0_reason, 1) && $input_label__closures
	}) || ($fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a8", "f"), $fg__input_open && $ui__input_show && _patch_write($scope0_id, "xh", input.open, !_server_guard($scope0_reason, 3)), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
