// tags/row.marko
var row_default = _template("__tests__/tags/row.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 1), $wg__input_header__OR__input_tag = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_attr_content("#section/0", $scope0_id, input.header, $wg__input_header);
	_html(`</section>${_el_mark($scope0_id, "#section/0", $wg__input_header)}`);
	_dynamic_tag($scope0_id, "#text/1", input.tag, { content: input.header }, 0, 0, $wg__input_header__OR__input_tag);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_header: _write_if($scope0_reason, 2) && input.header,
		input_tag: _write_if($scope0_reason, 1) && input.tag
	}, "__tests__/tags/row.marko", 0, {
		input_header: ["input.header"],
		input_tag: ["input.tag"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Label = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Label");
	}, $scope0_id) };
	_html("<div>");
	_attr_content("#div/0", $scope0_id, Label, 0);
	_html("</div>");
	row_default({
		tag: "section",
		header: attrTag({ content: _content("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html("Header");
		}, $scope0_id) })
	});
}, 1);
