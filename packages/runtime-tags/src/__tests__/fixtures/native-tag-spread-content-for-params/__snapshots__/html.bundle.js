// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_row = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.row, (r) => {
		const $scope1_id = _scope_id();
		_html("<div");
		_attrs_content(r, "a", $scope1_id, "div");
		_html(`</div>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_row, $sg__input_row, $sg__input_row, 0, 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [1, 2];
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(2);
	let $row;
	forOf(list, (i) => {
		$row = attrTags($row, { content: _content("a0", (x) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_text_resume($scope1_id, "a", i)}:${_text_resume($scope1_id, "b", typeof x, _serialize_guard($scope1_reason, 0) * 2)}:${_text_resume($scope1_id, "c", i + (x ? 10 : 0), 2)}`);
			_scope($scope1_id, {
				d: _serialize_if($scope1_reason, 0) && i,
				f: x
			});
		}, $scope0_id) });
	});
	const $childScope = _peek_scope_id();
	child_default({ row: $row });
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: list,
		b: _existing_scope($childScope)
	});
}, 1);
