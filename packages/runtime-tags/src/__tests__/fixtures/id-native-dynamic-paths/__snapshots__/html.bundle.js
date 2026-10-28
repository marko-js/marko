// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		const uid = _id();
		_html(`<label${_attr("for", uid)}>body</label><input${_attr("id", uid)}>`);
	}, $scope0_id) };
	const Wrap = { content: _content("a1", ({ on, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__on__OR__content = _write_guard($scope3_reason, 0);
		const Tag = on ? "p" : "div";
		_dynamic_tag($scope3_id, "a", Tag, { content }, 0, 0, $wg__on__OR__content);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {
			e: _write_if($scope3_reason, 1) && content,
			f: _write_if($scope3_reason, 2) && Tag
		});
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "a", Tag, { content: attrTag({ content: _content("a2", () => {
			_scope_reason();
			_scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>attr</label><input${_attr("id", uid)}>`);
		}, $scope2_id) }) }, 0, 0, $wg__input_items);
		_set_scope_reason($wg__input_items << 1 | $wg__input_items << 3);
		const $childScope = _peek_scope_id();
		Wrap.content({
			on: item.on,
			content: Body
		});
		_dynamic_tag($scope2_id, "c", Tag, [{ content: Body }], 0, 1, $wg__input_items);
		$wi__input_items && _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, { e: Body });
}, 1);
