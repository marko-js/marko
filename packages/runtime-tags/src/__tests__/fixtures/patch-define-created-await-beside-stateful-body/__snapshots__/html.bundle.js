// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a0: /*@__PURE__*/ (() => `a0 a12 a13 a14;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	a: "a !a6;b%b%b ;<!><!><!><button>toggle</button>",
	a1: /*@__PURE__*/ (() => `a1 a12 a13 a14;${((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_show__OR__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__label = _write_guard($scope3_reason, 2), $wg__isOpen = _write_guard($scope3_reason, 1);
		if ($scope0_page) _if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_resume($scope4_id, "a", label, $wg__label)}</em>`);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", _write_guard($scope3_reason, 0), $wg__isOpen, 0, 0, 1);
		_write_if($scope3_reason, 1) && _scope($scope3_id, { e: label });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_filled_guard($scope0_reason, 2) && _patch_value($scope2_id, "va4", value);
				_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 5);
				const $childScope = _patch_child($scope2_id, "a");
				Panel.content({
					isOpen: true,
					label: value
				});
				_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 3) << 5);
				const $childScope2 = _patch_child($scope2_id, "b");
				Panel.content({
					isOpen: true,
					label: input.label
				});
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_promise__OR__input_label && _scope_with_id($scope1_id),
					a: _existing_scope($childScope),
					b: _existing_scope($childScope2)
				}), "a5");
			}, 1, "a0");
			$wi__input_show__OR__input_promise__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 1), void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		label: input.label + "!"
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a6");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va10", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _write_if($scope0_reason, 1) && input.promise,
		h: input.label,
		j: open,
		k: _write_if($scope0_reason, 4) && Panel,
		m: Tag,
		p: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va7", input.promise, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va8", input.label, !_server_guard($scope0_reason, 3)), _content_withhold(input.label), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "va9", Tag, !_server_guard($scope0_reason, 4)), _content_withhold(Tag));
}, 1);
