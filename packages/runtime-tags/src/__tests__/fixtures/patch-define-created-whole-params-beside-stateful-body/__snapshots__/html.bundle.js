// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
_shells({
	a: "a !a4;b%b%b ;<!><!><!><button>toggle</button>",
	a1: /*@__PURE__*/ (() => `a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)(),
	a2: "a2;b%;<!><!><!>",
	a0: "a0;D ;<em> </em>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("a3", (...all) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__all = _write_guard($scope1_reason, 0), $wi__all = _write_if($scope1_reason, 0);
		const first = all.at(0);
		_if(() => {
			if (first.isOpen) {
				const $scope3_id = _scope_id();
				_for_of(first.item, (it) => {
					const $scope4_id = _scope_id();
					_html(`<em>${_text_resume($scope4_id, "a", it.label, void 0, $scope1_reason, 0)}</em>`);
					_scope($scope4_id, {});
				}, 0, $scope3_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope1_reason, 0);
				_scope($scope3_id, { _: $wi__all && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__all, void 0, void 0, void 0, ["a2"], $scope1_reason, 0);
		$wi__all && _scope($scope1_id, {});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			let $item;
			$item = attrTag({ label: "x" });
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			Panel.content({
				isOpen: true,
				item: $item
			});
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "b", Tag, {
		isOpen: true,
		item: attrTag({ label: input.label + "!" })
	}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		h: input.label,
		i: open,
		j: _unfilled_if($scope0_reason, 1) && Panel,
		l: Tag
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va6", Tag, !_server_guard($scope0_reason, 1)), _content_withhold(Tag));
}, 1);
