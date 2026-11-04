// template.marko
_shells({ a: "a !a3;b%b%b b ;<!><!><!><button>toggle</button><button>shown</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0), $fg__input_other = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = false;
	let shown = true;
	const Panel = { content: _content_resume("a1", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", label, $wg__label)}</em>`);
				_client_guard($scope2_reason, 2) && _patch_render($scope3_id, "a0");
				_write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", _write_guard($scope2_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope2_reason, 1) && _scope($scope2_id, { e: label });
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}<button>shown</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a3");
	$fg__input_label && _patch_render($scope0_id, "a2", "g");
	_patch_render($scope0_id, "a4", $fg__input_other && "h", $scope0_reason, 1);
	_patch_render($scope0_id, "a5", (($fg__input_label ? " g" : "") + ($fg__input_other ? " m" : "")).slice(1));
	_scope($scope0_id, {
		g: input.label,
		i: open,
		j: shown,
		k: _unfilled_if($scope0_reason, 1) && Panel,
		m: Tag
	}) || ($fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 0)), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
