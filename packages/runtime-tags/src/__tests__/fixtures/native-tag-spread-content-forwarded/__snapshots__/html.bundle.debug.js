// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_list = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.list, (item) => {
		const $scope1_id = _scope_id();
		_html("<button");
		_attrs_content(item, "#button/0", $scope1_id, "button");
		_html(`</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1_item#2");
		_scope($scope1_id, {}, "__tests__/tags/child.marko", "1:2", { "EventAttributes:#button/0": ["...item", "1:37"] });
	}, 0, $scope0_id, "#text/0", $sg__input_list, $sg__input_list, $sg__input_list, 0, 1);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_item = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_serialize_reason($sg__input_item << 1);
	const $childScope = _peek_scope_id();
	child_default({ list: input.item });
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	wrap_default({ item: attrTags(attrTag({
		onClick: _resume(function() {
			count++;
		}, "__tests__/template.marko_0/onClick", $scope0_id),
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`One ${_text_resume($scope1_id, "#text/0", count, 2)}`);
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_count#1/subscribe");
		}, $scope0_id)
	}), { content: _content("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("Two");
	}, $scope0_id) }) });
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
