// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a6;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a1: "a1;b%bD ;<!><!><span> </span>",
	a2: "a2;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", (attrs) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__attrs_isOpen = _write_guard($scope1_reason, 1), $scope1_page = _page_render();
		_if(() => {
			if (attrs.isOpen) {
				const $scope3_id = _scope_id();
				_for_of(attrs.item, (it) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_patch_text($scope4_id, "a", it.label, void 0, $scope1_reason, 2)}</em>`);
					_scope($scope4_id, {});
				}, 0, $scope3_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope1_reason, 2);
				_html(`<span>${_patch_text($scope3_id, "b", Object.keys(attrs).length, void 0, $scope1_reason, 0)}</span>`);
				_scope($scope3_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__attrs_isOpen, void 0, void 0, void 0, ["a1"], $scope1_reason, 1);
		$scope1_page ? _write_if($scope1_reason, 1) && _scope($scope1_id, { e: _unfilled_if($scope1_reason, 1) && attrs?.item }) : (_filled_guard($scope1_reason, 0) && _client_guard($scope1_reason, 1) && _patch_value($scope1_id, "va4", attrs, !_server_guard($scope1_reason, 0)), _filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1) && _patch_value($scope1_id, "va5", attrs?.item, !_server_guard($scope1_reason, 2)));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			let $item;
			$item = attrTag({ label: "x" });
			const $childScope = _patch_child($scope2_id, "a");
			Panel.content({
				isOpen: true,
				item: $item
			});
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		item: attrTag({ label: input.label + "!" })
	});
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a6");
	_patch_write($scope0_id, "wj", Panel, 1);
	_patch_value($scope0_id, "va9", open, 1);
	$scope0_page ? _scope($scope0_id, {
		h: input.label,
		i: open,
		j: _write_if($scope0_reason, 1) && Panel,
		l: Tag
	}) : (_filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va8", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
