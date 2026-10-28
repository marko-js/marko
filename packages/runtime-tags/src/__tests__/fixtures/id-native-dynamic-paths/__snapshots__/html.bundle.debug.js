// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id();
		_html(`<label${_attr("for", uid)}>body</label><input${_attr("id", uid)}>`);
	}, $scope0_id) };
	const Wrap = { content: _content("__tests__/template.marko_3*content", ({ on, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__on__OR__content = _write_guard($scope3_reason, 0);
		const Tag = on ? "p" : "div";
		_dynamic_tag($scope3_id, "#text/0", Tag, { content }, 0, 0, $wg__on__OR__content);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {
			content: _write_if($scope3_reason, 1) && content,
			Tag: _write_if($scope3_reason, 2) && Tag
		}, "__tests__/template.marko", "2:2", {
			content: "2:20",
			Tag: "3:10"
		});
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "#text/0", Tag, { content: attrTag({ content: _content("__tests__/template.marko_4*content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			const uid = _id();
			_html(`<label${_attr("for", uid)}>attr</label><input${_attr("id", uid)}>`);
		}, $scope2_id) }) }, 0, 0, $wg__input_items);
		_set_scope_reason($wg__input_items << 1 | $wg__input_items << 3);
		const $childScope = _peek_scope_id();
		Wrap.content({
			on: item.on,
			content: Body
		});
		_dynamic_tag($scope2_id, "#text/2", Tag, [{ content: Body }], 0, 1, $wg__input_items);
		$wi__input_items && _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:2");
	}, 0, $scope0_id, "#text/0", $wg__input_items, $wg__input_items);
	$wi__input_items && _scope($scope0_id, { Body }, "__tests__/template.marko", 0, { Body: "1:9" });
}, 1);
