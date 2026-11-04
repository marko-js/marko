// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a5;b%b%b ;<!><!><!><button id=t>toggle</button>",
	a1: `a1;${/*@__PURE__*/ ((_w0) => `b0${_w0}&D l`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<b> </b>`)($Panel_content__template)}`,
	a0: "a0;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_other = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a2", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 1), $fg__isOpen = _filled_guard($scope1_reason, 1), $fg__label = _filled_guard($scope1_reason, 2);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "a", label, 1, $scope1_reason, 2)}</em>`);
				_scope($scope3_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a0"], $scope1_reason, 1);
		const $return = label + "!";
		_script($scope1_id, "a3", $wg__isOpen, $fg__isOpen || $fg__label, [$fg__isOpen && "d", $fg__label && "e"]);
		$fg__label && _client_guard($scope1_reason, 1) && _patch_render($scope1_id, "a4", "e");
		_scope($scope1_id, {
			d: isOpen,
			e: label
		}) || ($fg__isOpen && _patch_write($scope1_id, "xd", isOpen, !_server_guard($scope1_reason, 1)), $fg__label && _patch_write($scope1_id, "xe", label, !_server_guard($scope1_reason, 2)));
		return $return;
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			let r = Panel.content({
				isOpen: true,
				label: "k"
			});
			_patch_child_end();
			_html(`<b>${_text_mark($scope2_id, "c", r, 1, 0, 0)}</b>`);
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label
	}, 8);
	_html(`<button id=t>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a5");
	_patch_render($scope0_id, "a6", $fg__input_other && "g", $scope0_reason, 1);
	_patch_render($scope0_id, "a7", [$fg__input_label && "h", $fg__input_other && "l"]);
	_scope($scope0_id, {
		h: input.label,
		i: open,
		j: _write_if($scope0_reason, 1) && Panel,
		l: Tag
	}) || ($fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 2)), $fg__input_other && _patch_write($scope0_id, "xl", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
