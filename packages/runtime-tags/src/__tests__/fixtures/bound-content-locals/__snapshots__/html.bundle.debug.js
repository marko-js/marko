// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = input.item;
	_html(`<button>copy</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", item.content, {});
		_scope($scope1_id, {}, "__tests__/tags/list.marko", "3:2");
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/list.marko_0");
	_scope($scope0_id, { items }, "__tests__/tags/list.marko", 0, { items: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let $item;
			forOf(input.items, (item) => $item = attrTags($item, { content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", item.text, _write_guard($scope2_reason, 0))} ${_text_mark($scope2_id, "#text/1", n, 2)}</em>`);
				_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:8"), "__tests__/template.marko_2_n#0:6/subscribe");
			}, $scope1_id, () => [{ item_text: item?.text }]) }));
			const $childScope = _peek_scope_id();
			list_default({ item: $item });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _write_if($scope0_reason, 2) && _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_items: _write_if($scope0_reason, 1) && input.items,
		n,
		"ClosureScopes:n/8": $n__closures
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		n: "1:6"
	});
}, 1);
