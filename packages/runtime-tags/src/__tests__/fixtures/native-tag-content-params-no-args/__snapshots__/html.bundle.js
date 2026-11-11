// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	const Label = { content: _content_resume("a0", ($label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__$label = _write_guard($scope1_reason, 0);
		_html(`<i>${_text_mark($scope1_id, "a", void 0 !== $label ? $label : "none", $wg__$label)}</i>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {});
	}, $scope0_id) };
	const Count = { content: _content_resume("a1", ($pattern) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__$pattern = _write_guard($scope2_reason, 0);
		const { count } = void 0 !== $pattern ? $pattern : { count: 1 };
		_html(`<b>${_text_mark($scope2_id, "a", count, $wg__$pattern)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	_html("<div>");
	_attr_content("a", $scope0_id, Label);
	_html(`</div>${_el_mark($scope0_id, "a")}<section`);
	_attrs_content({ content: Count }, "b", $scope0_id, "section");
	_html(`</section>${_el_mark($scope0_id, "b")}`);
	_dynamic_tag($scope0_id, "c", input.tag, {}, _content_resume("a2", ($label2) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__$label2 = _write_guard($scope3_reason, 0);
		_html(_text_mark($scope3_id, "a", void 0 !== $label2 ? $label2 : "body", $wg__$label2 * 2));
		_write_if($scope3_reason, 0) && _scope($scope3_id, {});
	}, $scope0_id), 0, _write_guard($scope0_reason, 0));
	_dynamic_tag($scope0_id, "d", input.tag, { content: Label.content });
	_html(`<button></button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_scope($scope0_id, {
		h: input.tag,
		i: on,
		j: Label,
		k: Label.content,
		l: Count,
		n: Count.content
	});
}, 1);
