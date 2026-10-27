// template.marko
const $Wrap_content__walks = "b%c";
const $Wrap_content__template = "<!><!><!>";
_shells({
	a3: "a3; b ;<label>attr</label><input>",
	a0: "a0; b ;<label>body</label><input>",
	a: "a;b%;<!><!><!>",
	a5: /*@__PURE__*/ (() => `a5;${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($Wrap_content__walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($Wrap_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id("A");
		_html(`<label${_patch_attr($scope1_id, "aa$for", "for", uid, 0, 0)}>body</label>${_el_resume($scope1_id, "a", 0)}<input${_patch_attr($scope1_id, "ab$id", "id", uid, 0, 0)}>${_el_resume($scope1_id, "b", 0)}`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	const Wrap = { content: _content("a1", ({ on, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__on__OR__content = _write_guard($scope3_reason, 0), $cg__on = _client_guard($scope3_reason, 1), $cg__content = _client_guard($scope3_reason, 2);
		const Tag = on ? "p" : "div";
		_dynamic_tag($scope3_id, "a", Tag, { content }, 1, 0, 0, $wg__on__OR__content, $scope3_reason, 0);
		$cg__on && _patch_write($scope3_id, "xe", content, !(_filled_guard($scope3_reason, 2) && $cg__on));
		$cg__content && _patch_write($scope3_id, "xf", Tag, !(_filled_guard($scope3_reason, 1) && $cg__content));
		_patch_join_init($scope3_id, "a2", $scope3_reason, 0, _filled_guard($scope3_reason, 2) && "e", _filled_guard($scope3_reason, 1) && "f");
		_write_if($scope3_reason, 0) && _scope($scope3_id, {
			e: (_unfilled_if($scope3_reason, 1) || _unfilled_if($scope3_reason, 0)) && content,
			f: (_unfilled_if($scope3_reason, 2) || _unfilled_if($scope3_reason, 0)) && Tag
		});
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "a", Tag, { content: attrTag({ content: _content_elide("a3", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			const uid = _id("B");
			_html(`<label${_patch_attr($scope4_id, "aa$for", "for", uid, 0, 0)}>attr</label>${_el_resume($scope4_id, "a", 0)}<input${_patch_attr($scope4_id, "ab$id", "id", uid, 0, 0)}>${_el_resume($scope4_id, "b", 0)}`);
			_scope($scope4_id, {});
		}, $scope2_id) }) }, 9, 0, 0, $wg__input_items, $scope0_reason, 0);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
		const $childScope = _patch_child($scope2_id, "b", 2);
		Wrap.content({
			on: item.on,
			content: Body
		});
		_patch_child_end();
		_dynamic_tag($scope2_id, "c", Tag, [{ content: Body }], 25, 0, 1, $wg__input_items, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "a4");
		_scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 0);
	_scope($scope0_id, { e: _unfilled_if($scope0_reason, 0) && Body });
}, 1);
