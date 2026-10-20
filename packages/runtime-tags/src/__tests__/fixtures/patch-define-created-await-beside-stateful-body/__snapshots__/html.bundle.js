// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a0: /*@__PURE__*/ (() => `a0 a6;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	a: "a !a7;b%b%b ;<!><!><!><button>toggle</button>",
	a1: /*@__PURE__*/ (() => `a1 a6;${((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($Panel_content__walks, $Panel_content__walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($Panel_content__template, $Panel_content__template)}`)(),
	a2: "a2;b%;<!><!><!>",
	a3: "a3;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_promise__OR__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let open = false;
	const Panel = { content: _content_resume("a4", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 0), $scope3_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_patch_text($scope4_id, "a", label, void 0, $scope3_reason, 1)}</em>`);
				_scope($scope4_id, { _: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a3"], $scope3_reason, 0);
		$scope3_page ? _write_if($scope3_reason, 0) && _scope($scope3_id, { e: _unfilled_if($scope3_reason, 0) && label }) : _filled_guard($scope3_reason, 1) && _client_guard($scope3_reason, 0) && _patch_value($scope3_id, "va5", label, !_server_guard($scope3_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 2) << 3);
				const $childScope = _patch_child($scope2_id, "a");
				Panel.content({
					isOpen: true,
					label: value
				});
				_set_scope_reason(_mask_group($scope0_reason, 3) << 3);
				const $childScope2 = _patch_child($scope2_id, "b");
				Panel.content({
					isOpen: true,
					label: input.label
				});
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_promise__OR__input_label && _scope_with_id($scope1_id),
					a: _existing_scope($childScope),
					b: _existing_scope($childScope2)
				}), "a6");
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
	_script($scope0_id, "a7");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va11", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 1) && input.promise,
		h: input.label,
		j: open,
		k: _write_if($scope0_reason, 4) && Panel,
		m: Tag,
		p: _write_if($scope0_reason, 3) && $input_label__closures
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va8", input.promise, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va9", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _patch_value($scope0_id, "va10", Tag, !_server_guard($scope0_reason, 4)));
}, 1);
