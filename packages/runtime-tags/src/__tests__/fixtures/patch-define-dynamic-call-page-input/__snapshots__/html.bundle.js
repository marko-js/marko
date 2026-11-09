// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a2: "a2",
	a3: "a3",
	a: `a !a4;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`,
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_other = _unfilled_if($scope0_reason, 5), $ui__input_label__OR__input_other__OR__input_show = _unfilled_if($scope0_reason, 3), $ui__input_label__OR__input_other = _unfilled_if($scope0_reason, 0), $ui__input_label__OR__input_show = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 4), $fg__input_show = _filled_guard($scope0_reason, 6), $fg__input_other = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $ui__isOpen = _unfilled_if($scope1_reason, 0), $fg__label = _filled_guard($scope1_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", label, 1, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_render($scope2_id, "a0");
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope1_reason, 0);
		$fg__label && _client_guard($scope1_reason, 0) && _patch_render($scope1_id, "a0", "e");
		_write_if($scope1_reason, 0) && _scope($scope1_id, { e: ($ui__isOpen || _unfilled_if($scope1_reason, 1)) && label }) || $fg__label && $ui__isOpen && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Other = { content: _content_resume("a2", ({ label }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_mark($scope3_id, "a", label, 1, 4, 0)}</i>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_set_scope_reason(2 | _updates_from($scope0_reason, 4) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({
		isOpen: open,
		label: input.label
	});
	_patch_child_end();
	const Tag = input.other ? Other : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: input.show,
		label: input.label + "!"
	}, 9, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a4");
	_patch_render($scope0_id, "a5", [
		$fg__input_label && "f",
		$fg__input_show && "h",
		$fg__input_other && "m"
	], $scope0_reason, 3);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && input.label,
		h: ($ui__input_label__OR__input_other || $ui__input_label__OR__input_other__OR__input_show) && input.show,
		i: open,
		j: $ui__input_other && Panel,
		k: $ui__input_other && Other,
		m: ($ui__input_label__OR__input_show || $ui__input_label__OR__input_other__OR__input_show) && Tag,
		a: _existing_scope($childScope)
	}) || ($fg__input_label && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 4)), $fg__input_show && $ui__input_label__OR__input_other && _patch_write($scope0_id, "xh", input.show, !_server_guard($scope0_reason, 6)), $fg__input_other && $ui__input_label__OR__input_show && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 5)));
}, 1);
