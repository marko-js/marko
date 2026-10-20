// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a5;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1;b%;<!><!><!>",
	a2: "a2;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", ({ isOpen, item }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0), $scope2_page = _page_render();
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_for_of(item, (it) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_patch_text($scope4_id, "a", it.label, void 0, $scope2_reason, 1)}</em>`);
					_scope($scope4_id, {});
				}, 0, $scope3_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope2_reason, 1);
				_scope($scope3_id, { _: _write_if($scope2_reason, 1) && _scope_with_id($scope2_id) });
				return 0;
			}
		}, $scope2_id, "a", 1, $wg__isOpen, void 0, void 0, void 0, ["a1"], $scope2_reason, 0);
		$scope2_page ? _write_if($scope2_reason, 0) && _scope($scope2_id, { e: _unfilled_if($scope2_reason, 0) && item }) : _filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 0) && _patch_value($scope2_id, "va4", item, !_server_guard($scope2_reason, 1));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			let $item;
			$item = attrTag({ label: "x" });
			const $childScope = _patch_child($scope1_id, "a");
			Panel.content({
				isOpen: input.open,
				item: $item
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		item: attrTag({ label: input.label + "!" })
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a5");
	_patch_write($scope0_id, "wk", Panel, 1);
	_patch_value($scope0_id, "va9", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 0) && input.open,
		i: input.label,
		j: open,
		k: _write_if($scope0_reason, 2) && Panel,
		m: Tag
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va6", input.open, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 3) && _patch_value($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va8", Tag, !_server_guard($scope0_reason, 2)));
}, 1);
