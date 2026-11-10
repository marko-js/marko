// tags/row.marko
var row_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 1), $wg__input_header__OR__input_tag = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_attr_content("a", $scope0_id, input.header, $wg__input_header);
	_html(`</section>${_el_mark($scope0_id, "a", $wg__input_header)}`);
	_dynamic_tag($scope0_id, "b", input.tag, { content: input.header }, 0, 0, $wg__input_header__OR__input_tag);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.header,
		f: _write_if($scope0_reason, 1) && input.tag
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Label = { content: _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Label");
	}, $scope0_id) };
	_html("<div>");
	_attr_content("a", $scope0_id, Label, 0);
	_html("</div>");
	row_default({
		tag: "section",
		header: attrTag({ content: _content("a1", () => {
			_scope_reason();
			_scope_id();
			_html("Header");
		}, $scope0_id) })
	});
}, 1);
