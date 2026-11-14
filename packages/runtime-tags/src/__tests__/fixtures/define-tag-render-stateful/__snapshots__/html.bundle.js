// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	const MyTag = { content: _content("a0", ({ name, count }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div>Hello ${_escape(name)} ${_text_mark($scope1_id, "b", count, 2)}</div>`);
		_scope($scope1_id, {});
	}, $scope0_id) };
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	MyTag.content({
		name: "Ryan",
		count
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: count,
		c: _existing_scope($childScope)
	});
}, 1);
