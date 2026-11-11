// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a2: `a2;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`,
	a: "a !a8;b%b%b ;<!><!><!><button>toggle</button>",
	a3: `a3;${((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`,
	a4: "a4;b%;<!><!><!>",
	a1: "a1;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 2), $fg__input_promise = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 2), $fg__input_other = _filled_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a5", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 0), $ui__isOpen = _unfilled_if($scope3_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "a", label, 1, $scope3_reason, 1)}</em>`);
				_client_guard($scope3_reason, 1) && _patch_render($scope4_id, "a0");
				_scope($scope4_id, { _: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a1"], $scope3_reason, 0);
		$ui__isOpen && _patch_write($scope3_id, "we", label, 1);
		_write_if($scope3_reason, 0) && _scope($scope3_id, { e: ($ui__isOpen || _unfilled_if($scope3_reason, 1)) && label });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 3) << 3);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				Panel.content({
					isOpen: true,
					label: value
				});
				_patch_child_end();
				_set_scope_reason(_updates_from($scope0_reason, 4) << 3);
				const $childScope2 = _peek_scope_id($scope2_id, "b", 1);
				Panel.content({
					isOpen: true,
					label: input.label
				});
				_patch_child_end();
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a6", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {
					a: _existing_scope($childScope),
					b: _existing_scope($childScope2)
				}), $cg__input_label && "a6", 0);
				_resume_branch($scope2_id);
			}, 1, "a2", _unfilled_if($scope0_reason, 3));
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a7");
			_write_if($scope0_reason, 1) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a4"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	}, 16);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a8");
	$fg__input_promise && $cg__input_show && _patch_render($scope0_id, "a7", "g");
	_patch_render($scope0_id, "a10", $fg__input_other && "i", $scope0_reason, 5);
	_patch_render($scope0_id, "a11", (($fg__input_label ? " h" : "") + ($fg__input_other ? " m" : "")).slice(1));
	_scope($scope0_id, {
		g: ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.promise,
		h: input.label,
		j: open,
		k: _unfilled_if($scope0_reason, 5) && Panel,
		m: Tag,
		p: _write_if($scope0_reason, 4) && $input_label__closures
	}) || ($fg__input_promise && $ui__input_show && _patch_write($scope0_id, "xg", input.promise, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "a9", "h"), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 5)));
}, 1);
