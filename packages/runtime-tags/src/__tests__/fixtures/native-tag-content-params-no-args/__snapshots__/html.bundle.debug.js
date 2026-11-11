// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	const Label = { content: _content_resume("__tests__/template.marko_1*content", ($label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__$label = _write_guard($scope1_reason, 0);
		const label = void 0 !== $label ? $label : "none";
		_html(`<i>${_text_mark($scope1_id, "#text/0", label, $wg__$label)}</i>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	const Count = { content: _content_resume("__tests__/template.marko_2*content", ($pattern) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__$pattern = _write_guard($scope2_reason, 0);
		const { count } = void 0 !== $pattern ? $pattern : { count: 1 };
		_html(`<b>${_text_mark($scope2_id, "#text/0", count, $wg__$pattern)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "3:2");
	}, $scope0_id) };
	_html("<div>");
	_attr_content("#div/0", $scope0_id, on ? Label : Count);
	_html(`</div>${_el_mark($scope0_id, "#div/0")}<section`);
	_attrs_content(on ? { content: Count } : { content: Label }, "#section/1", $scope0_id, "section");
	_html(`</section>${_el_mark($scope0_id, "#section/1")}`);
	_dynamic_tag($scope0_id, "#text/2", input.tag, {}, _content_resume("__tests__/template.marko_3*content", ($label2) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__$label2 = _write_guard($scope3_reason, 0);
		const label = void 0 !== $label2 ? $label2 : "body";
		_html(_text_mark($scope3_id, "#text/0", label, $wg__$label2 * 2));
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "6:4");
	}, $scope0_id), 0, _write_guard($scope0_reason, 0));
	_dynamic_tag($scope0_id, "#text/3", input.tag, { content: on ? Label.content : Count.content });
	_html(`<button></button>${_el_mark($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_on#8_Label#9_Count#11");
	_scope($scope0_id, {
		input_tag: input.tag,
		on,
		Label,
		Label_content: Label.content,
		Count,
		Count_content: Count.content
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		on: "1:6",
		Label: "2:9",
		Label_content: ["Label.content", "2:9"],
		Count: "3:9",
		Count_content: ["Count.content", "3:9"],
		"EventAttributes:#section/1": ["...on ? { content: Count } : { content: Label }", "5:14"]
	});
}, 1);
