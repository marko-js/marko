// template.marko
const $Panel_content2__walks = "b%c";
const $Panel_content2__template = "<!><!><!>";
_shells({
	a1: "a1",
	a: "a !a9;b%b%b ;<!><!><!><button>toggle</button>",
	a2: `a2;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content2__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content2__template)}`,
	a0: "a0;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_open__OR__input_label = _write_if($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 4), $fg__input_open = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4), $fg__input_other = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, content }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__content = _write_guard($scope4_reason, 2), $wg__isOpen = _write_guard($scope4_reason, 1), $fg__content = _filled_guard($scope4_reason, 2);
		_if(() => {
			if (isOpen) {
				const $scope5_id = _scope_id();
				_dynamic_tag($scope5_id, "a", content, {}, 2, 0, 0, $wg__content, $scope4_reason, 2);
				_write_if($scope4_reason, 0) && _scope($scope5_id, { _: _write_if($scope4_reason, 2) && _scope_with_id($scope4_id) });
				return 0;
			}
		}, $scope4_id, "a", 1, $wg__isOpen, 1, 0, 0, ["a0"], $scope4_reason, 1);
		$fg__content && _client_guard($scope4_reason, 1) && _patch_render($scope4_id, "a4", "e");
		_write_if($scope4_reason, 1) && _scope($scope4_id, { e: _unfilled_if($scope4_reason, 1) && content }) || $fg__content && _unfilled_if($scope4_reason, 1) && _patch_write($scope4_id, "xe", content, !_server_guard($scope4_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1 | _updates_from($scope0_reason, 3) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 1);
			Panel.content({
				isOpen: input.open,
				content: _content_resume("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 4)}</em>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a5", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_open__OR__input_label && _scope_with_id($scope1_id) }), $cg__input_label && "a5");
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a6");
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_open__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a2"], $scope0_reason, 2);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, { isOpen: true }, 16, _content_resume("a7", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<b>${_text_mark($scope3_id, "a", input.label, $wg__input_label)}!</b>`);
		$cg__input_label && _patch_render($scope3_id, "a8");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cp: $wi__input_label && 1
		}), $cg__input_label && "a8", $wg__input_label);
	}, $scope0_id));
	_html(`<button>toggle</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a9");
	$fg__input_open && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "a6", "g");
	$fg__input_label && _patch_subscribers($scope0_id, "a10", "h");
	_patch_render($scope0_id, "a11", $fg__input_other && "i", $scope0_reason, 5);
	_patch_render($scope0_id, "a12", $fg__input_other && "m");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.open,
		h: input.label,
		j: open,
		k: _write_if($scope0_reason, 5) && Panel,
		m: Tag,
		p: $wi__input_label && $input_label__closures
	}) || ($fg__input_open && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xg", input.open, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 4)), $fg__input_other && _patch_write($scope0_id, "xm", Tag, !_server_guard($scope0_reason, 5)));
}, 1);
