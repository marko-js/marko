// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (r) => {
		const $scope1_id = _scope_id();
		_html("<div");
		_attrs_content(r, "#div/0", $scope1_id, "div");
		_html(`</div>${_el_resume($scope1_id, "#div/0")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1_r#2");
		_scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2", { "EventAttributes:#div/0": ["...r", "1:30"] });
	}, 0, $scope0_id, "#text/0", $sg__input_row, $sg__input_row, $sg__input_row, 0, 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(2);
	let $row;
	forOf(list, (i) => {
		$row = attrTags($row, { content: _content("__tests__/template.marko_1*content", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_text_resume($scope1_id, "#text/0", i)}:${_text_resume($scope1_id, "#text/1", typeof x, _serialize_guard($scope1_reason, 0) * 2)}:${_text_resume($scope1_id, "#text/2", i + (x ? 10 : 0), 2)}`);
			_scope($scope1_id, {
				i: _serialize_if($scope1_reason, 0) && i,
				x
			}, "__tests__/template.marko", "5:6", {
				i: "4:8",
				x: "5:11"
			});
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	child_default({ row: $row });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { list: "1:6" });
}, 1);
