// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a2;b%b%b ;<!><!><!><button>toggle</button>",
	a0: /*@__PURE__*/ (() => `a0 a7;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a1", (...all) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__all = _write_guard($scope1_reason, 0), $wi__all = _write_if($scope1_reason, 0);
		const first = all.at(0);
		if ($scope0_page) _if(() => {
			if (first.isOpen) {
				const $scope3_id = _scope_id();
				if ($scope0_page) _for_of(first.item, (it) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_resume($scope4_id, "a", it.label, $wg__all)}</em>`);
					$wi__all && _scope($scope4_id, {});
				}, 0, $scope3_id, "a", $wg__all, $wg__all, 0, 0, 1);
				$wi__all && _scope($scope3_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", $wg__all, $wg__all);
		$wi__all && _scope($scope1_id, {});
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
	_script($scope0_id, "a2");
	_patch_write($scope0_id, "wj", Panel, 1);
	_patch_value($scope0_id, "va5", open, 1);
	$scope0_page ? _scope($scope0_id, {
		h: input.label,
		i: open,
		j: _write_if($scope0_reason, 1) && Panel,
		l: Tag
	}) : (_filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
