// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_row = _write_guard($scope0_reason, 2), $wg__input_items = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (i) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.row, {}, 0, 0, $wg__input_row);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/list.marko", "1:2");
	}, 0, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_items);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_row: input.row }, "__tests__/tags/list.marko", 0, { input_row: ["input.row"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let items = [1, 2];
	let n = 0;
	_html("<div>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	list_default({
		items,
		row: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "#text/0", n));
			_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:25"), "__tests__/template.marko_1_n#0:3/subscribe");
		}, $scope0_id) })
	});
	_html(`</div><button>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		n,
		"ClosureScopes:n/4": $n__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		n: "2:6"
	});
}, 1);
